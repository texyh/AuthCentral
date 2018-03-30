using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthCentral.Web.Providers
{
    public static class AppConfig
    {
        public static string DbConnection => $"User ID={DbUsername};Password={DbPassword};Server={DbServer};Port=5432;Database={DbName};Pooling=true;SSL Mode=Prefer;Trust Server Certificate=true";
        
        public static string Secret => Environment.GetEnvironmentVariable("SECRET");
        
        public static string DbUsername => Environment.GetEnvironmentVariable("DB_USERNAME");

        public static string DbPassword => Environment.GetEnvironmentVariable("DB_PASSWORD");

        public static string DbName => Environment.GetEnvironmentVariable("DB_NAME");

        public static string DbServer => Environment.GetEnvironmentVariable("DB_SERVER");

        public static string AuthorizationUrl => Environment.GetEnvironmentVariable("AUTH_URL");

        public static string ServerUrl => Environment.GetEnvironmentVariable("SERVER_URL");

    }
}
