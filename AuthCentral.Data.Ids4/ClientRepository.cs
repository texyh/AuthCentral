using AuthCentral.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AuthCentral.Core.Models;
using AutoMapper;
using IdentityServer4.EntityFramework.DbContexts;
using Microsoft.EntityFrameworkCore;

namespace AuthCentral.Data.Ids4
{
    public class ClientRepository : IClientRepository
    {
        private readonly ConfigurationDbContext _dbContext;
        private readonly IMapper _mapper;

        public ClientRepository(ConfigurationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        public async Task<int> CreateClient(Client client)
        {
            var clientEntity = _mapper.Map<IdentityServer4.EntityFramework.Entities.Client>(client);

            _dbContext.Clients.Add(clientEntity);
            await _dbContext.SaveChangesAsync();

            return clientEntity.Id;

        }

        public  async Task UpdateClient(Client client)
        {
            var entity = _mapper.Map<IdentityServer4.EntityFramework.Entities.Client>(client);
            var dbClient = await _dbContext.Clients.FirstOrDefaultAsync(x => x.Id == client.Id);

            if (dbClient == null)
            {
                throw new ArgumentException($"No client exists with id, {client.Id}");
            }

            _dbContext.Entry(dbClient).CurrentValues.SetValues(entity);

            await _dbContext.SaveChangesAsync();
        }

        public async Task<Client> GetClient(int id)
        {
            var client = await _dbContext.Clients.FirstOrDefaultAsync(x => x.Id == id);

            if (client == null)
            {
                throw new ArgumentException($"No client exists with id, {client.Id}");
            }

            return _mapper.Map<Client>(client);
        }

        public async Task<IEnumerable<Client>> GetClients()
        {
            var client = await _dbContext.Clients.ToListAsync();

            return _mapper.Map<IEnumerable<Client>>(client);
        }
    }
}
