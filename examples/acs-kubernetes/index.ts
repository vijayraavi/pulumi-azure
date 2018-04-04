// Copyright 2016-2017, Pulumi Corporation.  All rights reserved.

import * as azure from "@pulumi/azure";
import { Config } from "@pulumi/pulumi";

const config = new Config("acs-kubernetes");
const clientId = config.require('clientId');
const sshKey = config.require('sshKey');
const clientSecret = config.require('clientSecret');

const resourceGroup = new azure.core.ResourceGroup("resourcegroup", {
    location: "West US",
});

const dnsPrefixStr = "pulumiazurekubernetes";

const containerGroup = new azure.containerservice.Service("containerservice", {
    location: resourceGroup.location,
    resourceGroupName: resourceGroup.name,
    orchestrationPlatform: "Kubernetes",
    masterProfile: {
        count: 1,
        dnsPrefix: dnsPrefixStr + "-master",       
    },
    agentPoolProfile: {
        name: "agentpools",
        count: 1,
        dnsPrefix: dnsPrefixStr + "-agent",
        vmSize: "Standard_D2_v2",
    },
    diagnosticsProfile: {
        enabled: true,
    },
    linuxProfile: {
        adminUsername: "pulumiadmin",
        sshKey: {
            keyData: sshKey,
        },
    },
    servicePrincipal: {
        clientId: clientId,
        clientSecret: clientSecret,
    },
});
