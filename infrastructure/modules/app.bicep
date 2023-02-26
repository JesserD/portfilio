@description('The location that the resources should be created in.')
param location string

param appServicePlanName string 
param appName string 

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appServicePlanName
  kind: 'linux'
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: 'F1'
    tier: 'Free'
  }
}

resource appServiceApp 'Microsoft.Web/sites@2021-02-01' = {
  name: appName
  location: location
  kind: 'app'
  properties: {
    enabled: true
    serverFarmId: appServicePlan.id
    httpsOnly: true
    hostNamesDisabled: false
    siteConfig: {
      alwaysOn: false
      ftpsState: 'Disabled'
      http20Enabled: true
      minTlsVersion: '1.2'
      ipSecurityRestrictions: [
        {
          name: 'Open access'
          priority: 300
          action: 'Allow'
          description: 'Allow access from all over the world'
          ipAddress: '0.0.0.0/0'
        }
      ]
      linuxFxVersion: 'NODE|16-lts'
    }
  }
  identity: {
    type: 'SystemAssigned'
  }
}
