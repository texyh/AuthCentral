using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthCentral.Core.Models;
using AuthCentral.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AuthCentral.Web.ApiControllers
{
    //[Authorize]
    [Produces("application/json")]
    [EnableCors("mycorspolicy")]
    [Route("api/clients")]
    public class ClientsController : Controller
    {
        private readonly IClientService _clientService;

        public ClientsController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        public async Task<IEnumerable<Client>> GetClients()
        {
            return await _clientService.GetClientsAsync();
        }

        [HttpGet, Route("{id:min(1)}")]
        public async Task<Client> GetClient(int id)
        {
            return await _clientService.GetClientAsync(id);
        }

        [HttpPost]
        public async Task<int> CreateClient([FromBody]Client client)
        {
            return await _clientService.SaveClientAsync(client);
        }

        /// <summary>
        /// Updates Clients
        /// </summary>
        /// <param name="id"></param>
        /// <param name="client"></param>
        /// <returns></returns>
        [HttpPut, Route("{id:min(1)}")]
        public async Task UpdateClient(int id, [FromBody]Client client)
        {
            client.Id = id;
            await _clientService.SaveClientAsync(client);
            
        }
    }
}
