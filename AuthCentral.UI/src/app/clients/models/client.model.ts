export class Client {

        public id : number

        public identifier : string

        public name : string

        public uri : string

        public absoluteRefreshTokenLifetime : number

        public accessTokenLifetime : number

        public accessTokenType: number

        public allowAccessTokensViaBrowser : boolean

        public allowOfflineAccess : boolean

        public allowPlextPkce : boolean

        public allowRememberConsent : boolean
        
        public alwaysIncludeUserClaimsInIdToken : boolean

        public alwaysSendClientClaims : boolean

        public authorizationCodeLifetime : number

        public enableLocalLogin : boolean

        public enabled : boolean

        public identityTokenLifetime : number

        public includeJwtId : boolean

        public logoUri : string

        public backChannelLogoutSessionRequired : boolean

        public frontChannelLogoutSessionRequired : boolean

        public protocolType : string

        public refreshTokenExpiration : number

        public refreshTokenUsage : number

        public requireClientSecret : boolean

        public requireConsent : boolean

        public requirePkce : boolean

        public slidingRefreshTokenLifetime : number

        public updateAccessTokenClaimsOnRefresh : boolean

        constructor () {

            this.accessTokenType = 0;

            this.alwaysIncludeUserClaimsInIdToken = true;

            this.alwaysSendClientClaims = true;

            this.authorizationCodeLifetime = 300;

            this.allowPlextPkce = false;

            this.enableLocalLogin = true;

            this.identityTokenLifetime = 300;

            this.includeJwtId = false;

            this.backChannelLogoutSessionRequired = true;

            this.frontChannelLogoutSessionRequired = true;

            this.protocolType = 'oidc';

            this.refreshTokenUsage = 1;

            this.requirePkce = false;

            this.updateAccessTokenClaimsOnRefresh = false;

        }
}