using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using System.Text;
using AuthCentral.Core.Repositories;
using AuthCentral.Web.Data;
using AuthCentral.Web.Models;
using AuthCentral.Web.Providers;
using AutoMapper;
using dotenv.net.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.Extensions.PlatformAbstractions;
using AuthCentral.Services;
using AuthCentral.Core.Services;
using AuthCentral.Data.Ids4;

namespace AuthCentral.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public IHostingEnvironment Environment { get; }

        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //string connectionString = Configuration.GetConnectionString("DefaultConnection");
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            var envFile = Environment.IsDevelopment() ? ".env" : "test.env";
            services.AddEnv(x =>
            {
                x
                    .AddEncoding(Encoding.Default)
                    .AddEnvFile(Path.GetFullPath(envFile))
                    .AddThrowOnError(false);
            });

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseNpgsql(AppConfig.DbConnection));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();
            services.AddCors(x =>
            {
                x.AddPolicy("mycorspolicy", p =>
                {
                    p.AllowAnyOrigin();
                    p.AllowAnyHeader();
                    p.AllowAnyMethod();
                });
            });
            services.AddAutoMapper();

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = AppConfig.ServerUrl;
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "authCentralApi";
                });

            services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new Info
                {
                    Title = "Auth Central",
                    Version = "v1",
                    Description = "A Single Signon system",
                    TermsOfService = "None",
                    Contact = new Contact
                    {
                        Name = "Onwuzulike Emeka",
                        Email = "Onwuzulikee1@gmail.com",
                        Url = string.Empty
                    }
                });
            });

            services.ConfigureSwaggerGen(opt =>
            {
                opt.AddSecurityDefinition("auth2_security",
                    new OAuth2Scheme
                    {
                        Type = "oauth2",
                        Description = "OAuth2 client credentials flow",
                        Flow = "implicit",
                        AuthorizationUrl = AppConfig.AuthorizationUrl,
                        Scopes = new Dictionary<string, string> {
                            { "authCentralApi", "Auth Central API" },
                            { "openid", "open id"}
                        },
                    });
            });

            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IClientRepository, ClientRepository>();

            var builder = services.AddIdentityServer(options =>
                {
                    options.Events.RaiseErrorEvents = true;
                    options.Events.RaiseInformationEvents = true;
                    options.Events.RaiseFailureEvents = true;
                    options.Events.RaiseSuccessEvents = true;
                })
                .AddAspNetIdentity<ApplicationUser>()
                // this adds the config data from DB (clients, resources)
                .AddConfigurationStore(options =>
                {
                    options.ConfigureDbContext = b =>
                        b.UseNpgsql(AppConfig.DbConnection, // change to postgress
                            sql => sql.MigrationsAssembly(migrationsAssembly));
                })
                // this adds the operational data from DB (codes, tokens, consents)
                .AddOperationalStore(options =>
                {
                    options.ConfigureDbContext = b =>
                        b.UseNpgsql(AppConfig.DbConnection, // change to postgres
                            sql => sql.MigrationsAssembly(migrationsAssembly));

                    // this enables automatic token cleanup. this is optional.
                    options.EnableTokenCleanup = true;
                    // options.TokenCleanupInterval = 15; // frequency in seconds to cleanup stale grants. 15 is useful during debugging
                });

            
                builder.AddDeveloperSigningCredential();
            
            //services.AddAuthentication()
            //    .AddGoogle(options =>
            //    {
            //        options.ClientId = "708996912208-9m4dkjb5hscn7cjrn5u0r4tbgkbj1fko.apps.googleusercontent.com";
            //        options.ClientSecret = "wdfPY6t8H8cecgjlxud__4Gh";
            //    })
            //    .AddOpenIdConnect("oidc", "OpenID Connect", options =>
            //    {
            //        options.Authority = "https://demo.identityserver.io/";
            //        options.ClientId = "implicit";
            //        options.SaveTokens = true;

            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            NameClaimType = "name",
            //            RoleClaimType = "role"
            //        };
            //    });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseCors("mycorspolicy");
            app.UseSwagger();
            app.UseSwaggerUI(x =>
            {
                x.SwaggerEndpoint("/swagger/v1/swagger.json", "Auth Central");
            });

            Seed.InitializeDatabase(app);

            app.UseStaticFiles();
            app.UseIdentityServer();
            app.UseMvcWithDefaultRoute();
        }
    }
}
