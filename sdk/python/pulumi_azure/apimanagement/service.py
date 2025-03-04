# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Service(pulumi.CustomResource):
    additional_locations: pulumi.Output[list]
    """
    One or more `additional_location` blocks as defined below.
    
      * `gateway_regional_url` (`str`) - The URL of the Regional Gateway for the API Management Service in the specified region.
      * `location` (`str`) - The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
      * `public_ip_addresses` (`list`) - Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
    """
    certificates: pulumi.Output[list]
    """
    One or more (up to 10) `certificate` blocks as defined below.
    
      * `certificatePassword` (`str`)
      * `encodedCertificate` (`str`)
      * `storeName` (`str`)
    """
    gateway_regional_url: pulumi.Output[str]
    """
    The URL of the Regional Gateway for the API Management Service in the specified region.
    """
    gateway_url: pulumi.Output[str]
    """
    The URL of the Gateway for the API Management Service.
    """
    hostname_configuration: pulumi.Output[dict]
    """
    A `hostname_configuration` block as defined below.
    
      * `managements` (`list`)
    
        * `certificate` (`str`) - One or more (up to 10) `certificate` blocks as defined below.
        * `certificatePassword` (`str`)
        * `hostName` (`str`)
        * `keyVaultId` (`str`)
        * `negotiateClientCertificate` (`bool`)
    
      * `portals` (`list`)
    
        * `certificate` (`str`) - One or more (up to 10) `certificate` blocks as defined below.
        * `certificatePassword` (`str`)
        * `hostName` (`str`)
        * `keyVaultId` (`str`)
        * `negotiateClientCertificate` (`bool`)
    
      * `proxies` (`list`)
    
        * `certificate` (`str`) - One or more (up to 10) `certificate` blocks as defined below.
        * `certificatePassword` (`str`)
        * `defaultSslBinding` (`bool`)
        * `hostName` (`str`)
        * `keyVaultId` (`str`)
        * `negotiateClientCertificate` (`bool`)
    
      * `scms` (`list`)
    
        * `certificate` (`str`) - One or more (up to 10) `certificate` blocks as defined below.
        * `certificatePassword` (`str`)
        * `hostName` (`str`)
        * `keyVaultId` (`str`)
        * `negotiateClientCertificate` (`bool`)
    """
    identity: pulumi.Output[dict]
    """
    An `identity` block is documented below.
    
      * `principalId` (`str`) - The Principal ID associated with this Managed Service Identity.
      * `tenantId` (`str`) - The Tenant ID associated with this Managed Service Identity.
      * `type` (`str`)
    """
    location: pulumi.Output[str]
    """
    The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
    """
    management_api_url: pulumi.Output[str]
    """
    The URL for the Management API associated with this API Management service.
    """
    name: pulumi.Output[str]
    """
    The name of the API Management Service. Changing this forces a new resource to be created.
    """
    notification_sender_email: pulumi.Output[str]
    """
    Email address from which the notification will be sent.
    """
    policy: pulumi.Output[dict]
    """
    A `policy` block as defined below.
    
      * `xml_content` (`str`)
      * `xml_link` (`str`)
    """
    portal_url: pulumi.Output[str]
    """
    The URL for the Publisher Portal associated with this API Management service.
    """
    public_ip_addresses: pulumi.Output[list]
    """
    Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
    """
    publisher_email: pulumi.Output[str]
    """
    The email of publisher/company.
    """
    publisher_name: pulumi.Output[str]
    """
    The name of publisher/company.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
    """
    scm_url: pulumi.Output[str]
    """
    The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
    """
    security: pulumi.Output[dict]
    """
    A `security` block as defined below.
    
      * `disableBackendSsl30` (`bool`)
      * `disableBackendTls10` (`bool`)
      * `disableBackendTls11` (`bool`)
      * `disableFrontendSsl30` (`bool`)
      * `disableFrontendTls10` (`bool`)
      * `disableFrontendTls11` (`bool`)
      * `disableTripleDesChipers` (`bool`)
      * `disableTripleDesCiphers` (`bool`)
    """
    sign_in: pulumi.Output[dict]
    """
    A `sign_in` block as defined below.
    
      * `enabled` (`bool`)
    """
    sign_up: pulumi.Output[dict]
    """
    A `sign_up` block as defined below.
    
      * `enabled` (`bool`)
      * `termsOfService` (`dict`)
    
        * `consentRequired` (`bool`)
        * `enabled` (`bool`)
        * `text` (`str`)
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as documented below
    
      * `capacity` (`float`)
      * `name` (`str`) - The name of the API Management Service. Changing this forces a new resource to be created.
    """
    sku_name: pulumi.Output[str]
    """
    `sku_name` is a string consisting of two parts separated by an underscore(\_). The fist part is the `name`, valid values include: `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags assigned to the resource.
    """
    def __init__(__self__, resource_name, opts=None, additional_locations=None, certificates=None, hostname_configuration=None, identity=None, location=None, name=None, notification_sender_email=None, policy=None, publisher_email=None, publisher_name=None, resource_group_name=None, security=None, sign_in=None, sign_up=None, sku=None, sku_name=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] additional_locations: One or more `additional_location` blocks as defined below.
        :param pulumi.Input[list] certificates: One or more (up to 10) `certificate` blocks as defined below.
        :param pulumi.Input[dict] hostname_configuration: A `hostname_configuration` block as defined below.
        :param pulumi.Input[dict] identity: An `identity` block is documented below.
        :param pulumi.Input[str] location: The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notification_sender_email: Email address from which the notification will be sent.
        :param pulumi.Input[dict] policy: A `policy` block as defined below.
        :param pulumi.Input[str] publisher_email: The email of publisher/company.
        :param pulumi.Input[str] publisher_name: The name of publisher/company.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] security: A `security` block as defined below.
        :param pulumi.Input[dict] sign_in: A `sign_in` block as defined below.
        :param pulumi.Input[dict] sign_up: A `sign_up` block as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as documented below
        :param pulumi.Input[str] sku_name: `sku_name` is a string consisting of two parts separated by an underscore(\_). The fist part is the `name`, valid values include: `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
        :param pulumi.Input[dict] tags: A mapping of tags assigned to the resource.
        
        The **additional_locations** object supports the following:
        
          * `gateway_regional_url` (`pulumi.Input[str]`) - The URL of the Regional Gateway for the API Management Service in the specified region.
          * `location` (`pulumi.Input[str]`) - The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
          * `public_ip_addresses` (`pulumi.Input[list]`) - Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
        
        The **certificates** object supports the following:
        
          * `certificatePassword` (`pulumi.Input[str]`)
          * `encodedCertificate` (`pulumi.Input[str]`)
          * `storeName` (`pulumi.Input[str]`)
        
        The **hostname_configuration** object supports the following:
        
          * `managements` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `portals` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `proxies` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `defaultSslBinding` (`pulumi.Input[bool]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `scms` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
        The **identity** object supports the following:
        
          * `principalId` (`pulumi.Input[str]`) - The Principal ID associated with this Managed Service Identity.
          * `tenantId` (`pulumi.Input[str]`) - The Tenant ID associated with this Managed Service Identity.
          * `type` (`pulumi.Input[str]`)
        
        The **policy** object supports the following:
        
          * `xml_content` (`pulumi.Input[str]`)
          * `xml_link` (`pulumi.Input[str]`)
        
        The **security** object supports the following:
        
          * `disableBackendSsl30` (`pulumi.Input[bool]`)
          * `disableBackendTls10` (`pulumi.Input[bool]`)
          * `disableBackendTls11` (`pulumi.Input[bool]`)
          * `disableFrontendSsl30` (`pulumi.Input[bool]`)
          * `disableFrontendTls10` (`pulumi.Input[bool]`)
          * `disableFrontendTls11` (`pulumi.Input[bool]`)
          * `disableTripleDesChipers` (`pulumi.Input[bool]`)
          * `disableTripleDesCiphers` (`pulumi.Input[bool]`)
        
        The **sign_in** object supports the following:
        
          * `enabled` (`pulumi.Input[bool]`)
        
        The **sign_up** object supports the following:
        
          * `enabled` (`pulumi.Input[bool]`)
          * `termsOfService` (`pulumi.Input[dict]`)
        
            * `consentRequired` (`pulumi.Input[bool]`)
            * `enabled` (`pulumi.Input[bool]`)
            * `text` (`pulumi.Input[str]`)
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the API Management Service. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management.html.markdown.
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

            __props__['additional_locations'] = additional_locations
            __props__['certificates'] = certificates
            __props__['hostname_configuration'] = hostname_configuration
            __props__['identity'] = identity
            __props__['location'] = location
            __props__['name'] = name
            __props__['notification_sender_email'] = notification_sender_email
            __props__['policy'] = policy
            if publisher_email is None:
                raise TypeError("Missing required property 'publisher_email'")
            __props__['publisher_email'] = publisher_email
            if publisher_name is None:
                raise TypeError("Missing required property 'publisher_name'")
            __props__['publisher_name'] = publisher_name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['security'] = security
            __props__['sign_in'] = sign_in
            __props__['sign_up'] = sign_up
            __props__['sku'] = sku
            __props__['sku_name'] = sku_name
            __props__['tags'] = tags
            __props__['gateway_regional_url'] = None
            __props__['gateway_url'] = None
            __props__['management_api_url'] = None
            __props__['portal_url'] = None
            __props__['public_ip_addresses'] = None
            __props__['scm_url'] = None
        super(Service, __self__).__init__(
            'azure:apimanagement/service:Service',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, additional_locations=None, certificates=None, gateway_regional_url=None, gateway_url=None, hostname_configuration=None, identity=None, location=None, management_api_url=None, name=None, notification_sender_email=None, policy=None, portal_url=None, public_ip_addresses=None, publisher_email=None, publisher_name=None, resource_group_name=None, scm_url=None, security=None, sign_in=None, sign_up=None, sku=None, sku_name=None, tags=None):
        """
        Get an existing Service resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] additional_locations: One or more `additional_location` blocks as defined below.
        :param pulumi.Input[list] certificates: One or more (up to 10) `certificate` blocks as defined below.
        :param pulumi.Input[str] gateway_regional_url: The URL of the Regional Gateway for the API Management Service in the specified region.
        :param pulumi.Input[str] gateway_url: The URL of the Gateway for the API Management Service.
        :param pulumi.Input[dict] hostname_configuration: A `hostname_configuration` block as defined below.
        :param pulumi.Input[dict] identity: An `identity` block is documented below.
        :param pulumi.Input[str] location: The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] management_api_url: The URL for the Management API associated with this API Management service.
        :param pulumi.Input[str] name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notification_sender_email: Email address from which the notification will be sent.
        :param pulumi.Input[dict] policy: A `policy` block as defined below.
        :param pulumi.Input[str] portal_url: The URL for the Publisher Portal associated with this API Management service.
        :param pulumi.Input[list] public_ip_addresses: Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
        :param pulumi.Input[str] publisher_email: The email of publisher/company.
        :param pulumi.Input[str] publisher_name: The name of publisher/company.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] scm_url: The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
        :param pulumi.Input[dict] security: A `security` block as defined below.
        :param pulumi.Input[dict] sign_in: A `sign_in` block as defined below.
        :param pulumi.Input[dict] sign_up: A `sign_up` block as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as documented below
        :param pulumi.Input[str] sku_name: `sku_name` is a string consisting of two parts separated by an underscore(\_). The fist part is the `name`, valid values include: `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
        :param pulumi.Input[dict] tags: A mapping of tags assigned to the resource.
        
        The **additional_locations** object supports the following:
        
          * `gateway_regional_url` (`pulumi.Input[str]`) - The URL of the Regional Gateway for the API Management Service in the specified region.
          * `location` (`pulumi.Input[str]`) - The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
          * `public_ip_addresses` (`pulumi.Input[list]`) - Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
        
        The **certificates** object supports the following:
        
          * `certificatePassword` (`pulumi.Input[str]`)
          * `encodedCertificate` (`pulumi.Input[str]`)
          * `storeName` (`pulumi.Input[str]`)
        
        The **hostname_configuration** object supports the following:
        
          * `managements` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `portals` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `proxies` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `defaultSslBinding` (`pulumi.Input[bool]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
          * `scms` (`pulumi.Input[list]`)
        
            * `certificate` (`pulumi.Input[str]`) - One or more (up to 10) `certificate` blocks as defined below.
            * `certificatePassword` (`pulumi.Input[str]`)
            * `hostName` (`pulumi.Input[str]`)
            * `keyVaultId` (`pulumi.Input[str]`)
            * `negotiateClientCertificate` (`pulumi.Input[bool]`)
        
        The **identity** object supports the following:
        
          * `principalId` (`pulumi.Input[str]`) - The Principal ID associated with this Managed Service Identity.
          * `tenantId` (`pulumi.Input[str]`) - The Tenant ID associated with this Managed Service Identity.
          * `type` (`pulumi.Input[str]`)
        
        The **policy** object supports the following:
        
          * `xml_content` (`pulumi.Input[str]`)
          * `xml_link` (`pulumi.Input[str]`)
        
        The **security** object supports the following:
        
          * `disableBackendSsl30` (`pulumi.Input[bool]`)
          * `disableBackendTls10` (`pulumi.Input[bool]`)
          * `disableBackendTls11` (`pulumi.Input[bool]`)
          * `disableFrontendSsl30` (`pulumi.Input[bool]`)
          * `disableFrontendTls10` (`pulumi.Input[bool]`)
          * `disableFrontendTls11` (`pulumi.Input[bool]`)
          * `disableTripleDesChipers` (`pulumi.Input[bool]`)
          * `disableTripleDesCiphers` (`pulumi.Input[bool]`)
        
        The **sign_in** object supports the following:
        
          * `enabled` (`pulumi.Input[bool]`)
        
        The **sign_up** object supports the following:
        
          * `enabled` (`pulumi.Input[bool]`)
          * `termsOfService` (`pulumi.Input[dict]`)
        
            * `consentRequired` (`pulumi.Input[bool]`)
            * `enabled` (`pulumi.Input[bool]`)
            * `text` (`pulumi.Input[str]`)
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the API Management Service. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["additional_locations"] = additional_locations
        __props__["certificates"] = certificates
        __props__["gateway_regional_url"] = gateway_regional_url
        __props__["gateway_url"] = gateway_url
        __props__["hostname_configuration"] = hostname_configuration
        __props__["identity"] = identity
        __props__["location"] = location
        __props__["management_api_url"] = management_api_url
        __props__["name"] = name
        __props__["notification_sender_email"] = notification_sender_email
        __props__["policy"] = policy
        __props__["portal_url"] = portal_url
        __props__["public_ip_addresses"] = public_ip_addresses
        __props__["publisher_email"] = publisher_email
        __props__["publisher_name"] = publisher_name
        __props__["resource_group_name"] = resource_group_name
        __props__["scm_url"] = scm_url
        __props__["security"] = security
        __props__["sign_in"] = sign_in
        __props__["sign_up"] = sign_up
        __props__["sku"] = sku
        __props__["sku_name"] = sku_name
        __props__["tags"] = tags
        return Service(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

