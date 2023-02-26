param appName string
param appServicePlanName string

@description('The location that the resources should be created in.')
param location string = resourceGroup().location

module app 'modules/app.bicep' = {
  name: 'app'
  params: {
    location: location
    appName: appName
    appServicePlanName: appServicePlanName
  }
}
