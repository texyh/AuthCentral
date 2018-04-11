using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AuthCentral.Core.Models;

namespace AuthCentral.Core.Repositories
{
    public interface IClientRepository
    {
        Task<int> CreateClient(Client client);

        Task UpdateClient(Client client);

        Task<Client> GetClient(int id);

        Task<IEnumerable<Client>> GetClients();
    }
}
