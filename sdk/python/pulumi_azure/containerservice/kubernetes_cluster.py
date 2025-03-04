# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class KubernetesCluster(pulumi.CustomResource):
    addon_profile: pulumi.Output[dict]
    agent_pool_profiles: pulumi.Output[list]
    """
    One or more `agent_pool_profile` blocks as defined below.
    
      * `availabilityZones` (`list`)
      * `count` (`float`)
      * `dns_prefix` (`str`) - DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
      * `enableAutoScaling` (`bool`)
      * `fqdn` (`str`) - The FQDN of the Azure Kubernetes Managed Cluster.
      * `maxCount` (`float`)
      * `maxPods` (`float`)
      * `minCount` (`float`)
      * `name` (`str`) - The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
      * `nodeTaints` (`list`)
      * `osDiskSizeGb` (`float`)
      * `os_type` (`str`)
      * `type` (`str`)
      * `vm_size` (`str`)
      * `vnetSubnetId` (`str`)
    """
    api_server_authorized_ip_ranges: pulumi.Output[list]
    dns_prefix: pulumi.Output[str]
    """
    DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
    """
    enable_pod_security_policy: pulumi.Output[bool]
    fqdn: pulumi.Output[str]
    """
    The FQDN of the Azure Kubernetes Managed Cluster.
    """
    kube_admin_config: pulumi.Output[dict]
    """
    A `kube_admin_config` block as defined below. This is only available when Role Based Access Control with Azure Active Directory is enabled.
    
      * `clientCertificate` (`str`) - Base64 encoded public certificate used by clients to authenticate to the Kubernetes cluster.
      * `clientKey` (`str`) - Base64 encoded private key used by clients to authenticate to the Kubernetes cluster.
      * `clusterCaCertificate` (`str`) - Base64 encoded public CA certificate used as the root of trust for the Kubernetes cluster.
      * `host` (`str`) - The Kubernetes cluster server host.
      * `password` (`str`) - A password or token used to authenticate to the Kubernetes cluster.
      * `username` (`str`) - A username used to authenticate to the Kubernetes cluster.
    """
    kube_admin_config_raw: pulumi.Output[str]
    """
    Raw Kubernetes config for the admin account to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools. This is only available when Role Based Access Control with Azure Active Directory is enabled.
    """
    kube_config: pulumi.Output[dict]
    """
    A `kube_config` block as defined below.
    
      * `clientCertificate` (`str`) - Base64 encoded public certificate used by clients to authenticate to the Kubernetes cluster.
      * `clientKey` (`str`) - Base64 encoded private key used by clients to authenticate to the Kubernetes cluster.
      * `clusterCaCertificate` (`str`) - Base64 encoded public CA certificate used as the root of trust for the Kubernetes cluster.
      * `host` (`str`) - The Kubernetes cluster server host.
      * `password` (`str`) - A password or token used to authenticate to the Kubernetes cluster.
      * `username` (`str`) - A username used to authenticate to the Kubernetes cluster.
    """
    kube_config_raw: pulumi.Output[str]
    """
    Raw Kubernetes config to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools
    """
    kubernetes_version: pulumi.Output[str]
    linux_profile: pulumi.Output[dict]
    location: pulumi.Output[str]
    """
    The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
    """
    network_profile: pulumi.Output[dict]
    node_resource_group: pulumi.Output[str]
    """
    The auto-generated Resource Group which contains the resources for this Managed Kubernetes Cluster.
    """
    resource_group_name: pulumi.Output[str]
    """
    Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
    """
    role_based_access_control: pulumi.Output[dict]
    service_principal: pulumi.Output[dict]
    """
    A `service_principal` block as documented below.
    
      * `client_id` (`str`)
      * `client_secret` (`str`)
    """
    tags: pulumi.Output[dict]
    windows_profile: pulumi.Output[dict]
    def __init__(__self__, resource_name, opts=None, addon_profile=None, agent_pool_profiles=None, api_server_authorized_ip_ranges=None, dns_prefix=None, enable_pod_security_policy=None, kubernetes_version=None, linux_profile=None, location=None, name=None, network_profile=None, node_resource_group=None, resource_group_name=None, role_based_access_control=None, service_principal=None, tags=None, windows_profile=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Managed Kubernetes Cluster (also known as AKS / Azure Kubernetes Service)
        
        > **Note:** All arguments including the client secret will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] agent_pool_profiles: One or more `agent_pool_profile` blocks as defined below.
        :param pulumi.Input[str] dns_prefix: DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
        :param pulumi.Input[str] location: The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
        :param pulumi.Input[str] node_resource_group: The auto-generated Resource Group which contains the resources for this Managed Kubernetes Cluster.
        :param pulumi.Input[str] resource_group_name: Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] service_principal: A `service_principal` block as documented below.
        
        The **addon_profile** object supports the following:
        
          * `aciConnectorLinux` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
            * `subnetName` (`pulumi.Input[str]`)
        
          * `httpApplicationRouting` (`pulumi.Input[dict]`) - A `http_application_routing` block as defined below.
        
            * `enabled` (`pulumi.Input[bool]`)
            * `httpApplicationRoutingZoneName` (`pulumi.Input[str]`) - The Zone Name of the HTTP Application Routing.
        
          * `kubeDashboard` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
        
          * `omsAgent` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
            * `logAnalyticsWorkspaceId` (`pulumi.Input[str]`)
        
        The **agent_pool_profiles** object supports the following:
        
          * `availabilityZones` (`pulumi.Input[list]`)
          * `count` (`pulumi.Input[float]`)
          * `dns_prefix` (`pulumi.Input[str]`) - DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
          * `enableAutoScaling` (`pulumi.Input[bool]`)
          * `fqdn` (`pulumi.Input[str]`) - The FQDN of the Azure Kubernetes Managed Cluster.
          * `maxCount` (`pulumi.Input[float]`)
          * `maxPods` (`pulumi.Input[float]`)
          * `minCount` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
          * `nodeTaints` (`pulumi.Input[list]`)
          * `osDiskSizeGb` (`pulumi.Input[float]`)
          * `os_type` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[str]`)
          * `vm_size` (`pulumi.Input[str]`)
          * `vnetSubnetId` (`pulumi.Input[str]`)
        
        The **linux_profile** object supports the following:
        
          * `admin_username` (`pulumi.Input[str]`)
          * `sshKey` (`pulumi.Input[dict]`)
        
            * `keyData` (`pulumi.Input[str]`)
        
        The **network_profile** object supports the following:
        
          * `dnsServiceIp` (`pulumi.Input[str]`)
          * `dockerBridgeCidr` (`pulumi.Input[str]`)
          * `loadBalancerSku` (`pulumi.Input[str]`)
          * `networkPlugin` (`pulumi.Input[str]`)
          * `networkPolicy` (`pulumi.Input[str]`)
          * `podCidr` (`pulumi.Input[str]`)
          * `serviceCidr` (`pulumi.Input[str]`)
        
        The **role_based_access_control** object supports the following:
        
          * `azureActiveDirectory` (`pulumi.Input[dict]`)
        
            * `clientAppId` (`pulumi.Input[str]`)
            * `serverAppId` (`pulumi.Input[str]`)
            * `serverAppSecret` (`pulumi.Input[str]`)
            * `tenantId` (`pulumi.Input[str]`)
        
          * `enabled` (`pulumi.Input[bool]`)
        
        The **service_principal** object supports the following:
        
          * `client_id` (`pulumi.Input[str]`)
          * `client_secret` (`pulumi.Input[str]`)
        
        The **windows_profile** object supports the following:
        
          * `admin_password` (`pulumi.Input[str]`)
          * `admin_username` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kubernetes_cluster.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['addon_profile'] = addon_profile
            if agent_pool_profiles is None:
                raise TypeError("Missing required property 'agent_pool_profiles'")
            __props__['agent_pool_profiles'] = agent_pool_profiles
            __props__['api_server_authorized_ip_ranges'] = api_server_authorized_ip_ranges
            if dns_prefix is None:
                raise TypeError("Missing required property 'dns_prefix'")
            __props__['dns_prefix'] = dns_prefix
            __props__['enable_pod_security_policy'] = enable_pod_security_policy
            __props__['kubernetes_version'] = kubernetes_version
            __props__['linux_profile'] = linux_profile
            __props__['location'] = location
            __props__['name'] = name
            __props__['network_profile'] = network_profile
            __props__['node_resource_group'] = node_resource_group
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['role_based_access_control'] = role_based_access_control
            if service_principal is None:
                raise TypeError("Missing required property 'service_principal'")
            __props__['service_principal'] = service_principal
            __props__['tags'] = tags
            __props__['windows_profile'] = windows_profile
            __props__['fqdn'] = None
            __props__['kube_admin_config'] = None
            __props__['kube_admin_config_raw'] = None
            __props__['kube_config'] = None
            __props__['kube_config_raw'] = None
        super(KubernetesCluster, __self__).__init__(
            'azure:containerservice/kubernetesCluster:KubernetesCluster',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, addon_profile=None, agent_pool_profiles=None, api_server_authorized_ip_ranges=None, dns_prefix=None, enable_pod_security_policy=None, fqdn=None, kube_admin_config=None, kube_admin_config_raw=None, kube_config=None, kube_config_raw=None, kubernetes_version=None, linux_profile=None, location=None, name=None, network_profile=None, node_resource_group=None, resource_group_name=None, role_based_access_control=None, service_principal=None, tags=None, windows_profile=None):
        """
        Get an existing KubernetesCluster resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] agent_pool_profiles: One or more `agent_pool_profile` blocks as defined below.
        :param pulumi.Input[str] dns_prefix: DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
        :param pulumi.Input[str] fqdn: The FQDN of the Azure Kubernetes Managed Cluster.
        :param pulumi.Input[dict] kube_admin_config: A `kube_admin_config` block as defined below. This is only available when Role Based Access Control with Azure Active Directory is enabled.
        :param pulumi.Input[str] kube_admin_config_raw: Raw Kubernetes config for the admin account to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools. This is only available when Role Based Access Control with Azure Active Directory is enabled.
        :param pulumi.Input[dict] kube_config: A `kube_config` block as defined below.
        :param pulumi.Input[str] kube_config_raw: Raw Kubernetes config to be used by [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) and other compatible tools
        :param pulumi.Input[str] location: The location where the Managed Kubernetes Cluster should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
        :param pulumi.Input[str] node_resource_group: The auto-generated Resource Group which contains the resources for this Managed Kubernetes Cluster.
        :param pulumi.Input[str] resource_group_name: Specifies the Resource Group where the Managed Kubernetes Cluster should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] service_principal: A `service_principal` block as documented below.
        
        The **addon_profile** object supports the following:
        
          * `aciConnectorLinux` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
            * `subnetName` (`pulumi.Input[str]`)
        
          * `httpApplicationRouting` (`pulumi.Input[dict]`) - A `http_application_routing` block as defined below.
        
            * `enabled` (`pulumi.Input[bool]`)
            * `httpApplicationRoutingZoneName` (`pulumi.Input[str]`) - The Zone Name of the HTTP Application Routing.
        
          * `kubeDashboard` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
        
          * `omsAgent` (`pulumi.Input[dict]`)
        
            * `enabled` (`pulumi.Input[bool]`)
            * `logAnalyticsWorkspaceId` (`pulumi.Input[str]`)
        
        The **agent_pool_profiles** object supports the following:
        
          * `availabilityZones` (`pulumi.Input[list]`)
          * `count` (`pulumi.Input[float]`)
          * `dns_prefix` (`pulumi.Input[str]`) - DNS prefix specified when creating the managed cluster. Changing this forces a new resource to be created.
          * `enableAutoScaling` (`pulumi.Input[bool]`)
          * `fqdn` (`pulumi.Input[str]`) - The FQDN of the Azure Kubernetes Managed Cluster.
          * `maxCount` (`pulumi.Input[float]`)
          * `maxPods` (`pulumi.Input[float]`)
          * `minCount` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the Managed Kubernetes Cluster to create. Changing this forces a new resource to be created.
          * `nodeTaints` (`pulumi.Input[list]`)
          * `osDiskSizeGb` (`pulumi.Input[float]`)
          * `os_type` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[str]`)
          * `vm_size` (`pulumi.Input[str]`)
          * `vnetSubnetId` (`pulumi.Input[str]`)
        
        The **kube_admin_config** object supports the following:
        
          * `clientCertificate` (`pulumi.Input[str]`) - Base64 encoded public certificate used by clients to authenticate to the Kubernetes cluster.
          * `clientKey` (`pulumi.Input[str]`) - Base64 encoded private key used by clients to authenticate to the Kubernetes cluster.
          * `clusterCaCertificate` (`pulumi.Input[str]`) - Base64 encoded public CA certificate used as the root of trust for the Kubernetes cluster.
          * `host` (`pulumi.Input[str]`) - The Kubernetes cluster server host.
          * `password` (`pulumi.Input[str]`) - A password or token used to authenticate to the Kubernetes cluster.
          * `username` (`pulumi.Input[str]`) - A username used to authenticate to the Kubernetes cluster.
        
        The **kube_config** object supports the following:
        
          * `clientCertificate` (`pulumi.Input[str]`) - Base64 encoded public certificate used by clients to authenticate to the Kubernetes cluster.
          * `clientKey` (`pulumi.Input[str]`) - Base64 encoded private key used by clients to authenticate to the Kubernetes cluster.
          * `clusterCaCertificate` (`pulumi.Input[str]`) - Base64 encoded public CA certificate used as the root of trust for the Kubernetes cluster.
          * `host` (`pulumi.Input[str]`) - The Kubernetes cluster server host.
          * `password` (`pulumi.Input[str]`) - A password or token used to authenticate to the Kubernetes cluster.
          * `username` (`pulumi.Input[str]`) - A username used to authenticate to the Kubernetes cluster.
        
        The **linux_profile** object supports the following:
        
          * `admin_username` (`pulumi.Input[str]`)
          * `sshKey` (`pulumi.Input[dict]`)
        
            * `keyData` (`pulumi.Input[str]`)
        
        The **network_profile** object supports the following:
        
          * `dnsServiceIp` (`pulumi.Input[str]`)
          * `dockerBridgeCidr` (`pulumi.Input[str]`)
          * `loadBalancerSku` (`pulumi.Input[str]`)
          * `networkPlugin` (`pulumi.Input[str]`)
          * `networkPolicy` (`pulumi.Input[str]`)
          * `podCidr` (`pulumi.Input[str]`)
          * `serviceCidr` (`pulumi.Input[str]`)
        
        The **role_based_access_control** object supports the following:
        
          * `azureActiveDirectory` (`pulumi.Input[dict]`)
        
            * `clientAppId` (`pulumi.Input[str]`)
            * `serverAppId` (`pulumi.Input[str]`)
            * `serverAppSecret` (`pulumi.Input[str]`)
            * `tenantId` (`pulumi.Input[str]`)
        
          * `enabled` (`pulumi.Input[bool]`)
        
        The **service_principal** object supports the following:
        
          * `client_id` (`pulumi.Input[str]`)
          * `client_secret` (`pulumi.Input[str]`)
        
        The **windows_profile** object supports the following:
        
          * `admin_password` (`pulumi.Input[str]`)
          * `admin_username` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kubernetes_cluster.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["addon_profile"] = addon_profile
        __props__["agent_pool_profiles"] = agent_pool_profiles
        __props__["api_server_authorized_ip_ranges"] = api_server_authorized_ip_ranges
        __props__["dns_prefix"] = dns_prefix
        __props__["enable_pod_security_policy"] = enable_pod_security_policy
        __props__["fqdn"] = fqdn
        __props__["kube_admin_config"] = kube_admin_config
        __props__["kube_admin_config_raw"] = kube_admin_config_raw
        __props__["kube_config"] = kube_config
        __props__["kube_config_raw"] = kube_config_raw
        __props__["kubernetes_version"] = kubernetes_version
        __props__["linux_profile"] = linux_profile
        __props__["location"] = location
        __props__["name"] = name
        __props__["network_profile"] = network_profile
        __props__["node_resource_group"] = node_resource_group
        __props__["resource_group_name"] = resource_group_name
        __props__["role_based_access_control"] = role_based_access_control
        __props__["service_principal"] = service_principal
        __props__["tags"] = tags
        __props__["windows_profile"] = windows_profile
        return KubernetesCluster(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

