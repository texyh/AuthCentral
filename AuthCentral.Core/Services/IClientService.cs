using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AuthCentral.Core.Models;

namespace AuthCentral.Core.Services
{
    public interface IClientService
    {
        Task<int> SaveClientAsync(Client client);

        Task<Client> GetClientAsync(int id);

        Task<IEnumerable<Client>> GetClientsAsync();
        
    }
}
