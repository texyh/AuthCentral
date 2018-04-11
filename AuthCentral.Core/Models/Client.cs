using System;
using System.Collections.Generic;
using System.Text;

namespace AuthCentral.Core.Models
{
    public class Client
    {
        public int Id { get; set; }

        public string Identifier { get; set; }

        public string Name { get; set; }

        public string Uri { get; set; }

        public int AbsoluteRefreshTokenLifetime { get; set; }

        public int AccessTokenLifetime { get; set; }

        public int AccessTokenType => 0; // 0 for Jwt token

        public bool AllowAccessTokensViaBrowser { get; set; }

        public bool AllowOfflineAccess { get; set; }

        public bool AllowPlainTextPkce => false;

        public bool AllowRememberConsent { get; set; }

        public ICollection<string> AllowedGrantTypes { get; set; }

        public bool AlwaysIncludeUserClaimsInIdToken => true;

        public bool AlwaysSendClientClaims => true;

        public int AuthorizationCodeLifetime => 300;

        public bool EnableLocalLogin => true;

        public bool Enabled { get; set; }

        public int IdentityTokenLifetime => 300;

        public bool IncludeJwtId => false;

        public string LogoUri { get; set; }

        public bool BackChannelLogoutSessionRequired => true;

        public bool FrontChannelLogoutSessionRequired => true;

        public string ProtocolType => "oidc";

        public int RefreshTokenExpiration { get; set; }

        public int RefreshTokenUsage => 1; // 0: ReUse, 1: OneTimeOnly

        public bool RequireClientSecret { get; set; }

        public bool RequireConsent { get; set; }

        public bool RequirePkce => false;

        public int SlidingRefreshTokenLifetime { get; set; }

        public bool UpdateAccessTokenClaimsOnRefresh => false;

    }
}
