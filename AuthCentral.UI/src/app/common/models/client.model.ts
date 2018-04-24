export class Client {

        public Id : number

        public Identifier : string

        public Name : string

        public Uri : string

        public AbsoluteRefreshTokenLifetime : number

        public AccessTokenLifetime : number

        public AccessTokenType: number

        public AllowAccessTokensViaBrowser : boolean

        public AllowOfflineAccess : boolean

        public AllowPlextPkce : boolean

        public AllowRememberConsent : boolean
        
        public AlwaysIncludeUserClaimsInIdToken : boolean

        public AlwaysSendClientClaims : boolean

        public AuthorizationCodeLifetime : number

        public EnableLocalLogin : boolean

        public Enabled : boolean

        public IdentityTokenLifetime : number

        public IncludeJwtId : boolean

        public LogoUri : string

        public BackChannelLogoutSessionRequired : boolean

        public FrontChannelLogoutSessionRequired : boolean

        public ProtocolType : string

        public RefreshTokenExpiration : number

        public RefreshTokenUsage : number

        public RequireClientSecret : boolean

        public RequireConsent : boolean

        public RequirePkce : boolean

        public SlidingRefreshTokenLifetime : number

        public UpdateAccessTokenClaimsOnRefresh : boolean

        constructor () {

            this.AccessTokenType = 0;

            this.AlwaysIncludeUserClaimsInIdToken = true;

            this.AlwaysSendClientClaims = true;

            this.AuthorizationCodeLifetime = 300;

            this.AllowPlextPkce = false;

            this.EnableLocalLogin = true;

            this.IdentityTokenLifetime = 300;

            this.IncludeJwtId = false;

            this.BackChannelLogoutSessionRequired = true;

            this.FrontChannelLogoutSessionRequired = true;

            this.ProtocolType = 'oidc';

            this.RefreshTokenUsage = 1;

            this.RequirePkce = false;

            this.UpdateAccessTokenClaimsOnRefresh = false;

        }
}