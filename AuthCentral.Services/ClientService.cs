using AuthCentral.Core.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AuthCentral.Core.Models;
using AuthCentral.Core.Repositories;

namespace AuthCentral.Services
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<int> SaveClientAsync(Client client)
        {
            return  client.Id == default(int) ? await CreateClient(client) : await UpdateClient(client);
        }

        private async Task<int> UpdateClient(Client client)
        {
            try
            {
                await _clientRepository.UpdateClient(client);
                return client.Id;
            }
            catch (Exception e)
            {
               throw new InvalidOperationException("Failed to update client", e);
            }
        }

        private async Task<int> CreateClient(Client client)
        {
            try
            {
                return await _clientRepository.CreateClient(client);
            }
            catch (Exception e)
            {
                throw new InvalidOperationException("Failded to save client", e);
            }
        }

        public Task<Client> GetClientAsync(int id)
        {
            try
            {
                var client = _clientRepository.GetClient(id);

                if (client == null)
                {
                    throw new ArgumentException($"No client exists with id, {id}");
                }

                return client;
            }
            catch (Exception e)
            {
                throw new InvalidOperationException($"Failded to retrieve client with id,{id}", e);
            }
        }

        public Task<IEnumerable<Client>> GetClientsAsync()
        {
            try
            {
                return _clientRepository.GetClients();
            }
            catch (Exception e)
            {
                throw new InvalidOperationException("Failded to retrieve clients", e);
            }
        }
    }
}
