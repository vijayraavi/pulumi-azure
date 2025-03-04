# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Api(pulumi.CustomResource):
    api_management_name: pulumi.Output[str]
    """
    The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
    """
    description: pulumi.Output[str]
    """
    A description of the API Management API, which may include HTML formatting tags.
    """
    display_name: pulumi.Output[str]
    """
    The display name of the API.
    """
    import_: pulumi.Output[dict]
    """
    A `import` block as documented below.
    
      * `contentFormat` (`str`)
      * `contentValue` (`str`)
      * `wsdlSelector` (`dict`)
    
        * `endpointName` (`str`)
        * `serviceName` (`str`)
    """
    is_current: pulumi.Output[bool]
    """
    Is this the current API Revision?
    """
    is_online: pulumi.Output[bool]
    """
    Is this API Revision online/accessible via the Gateway?
    """
    name: pulumi.Output[str]
    """
    The name of the API Management API. Changing this forces a new resource to be created.
    """
    path: pulumi.Output[str]
    """
    The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
    """
    protocols: pulumi.Output[list]
    """
    A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
    """
    revision: pulumi.Output[str]
    """
    The Revision which used for this API.
    """
    service_url: pulumi.Output[str]
    """
    Absolute URL of the backend service implementing this API.
    """
    soap_pass_through: pulumi.Output[bool]
    """
    Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
    """
    subscription_key_parameter_names: pulumi.Output[dict]
    """
    A `subscription_key_parameter_names` block as documented below.
    
      * `header` (`str`)
      * `query` (`str`)
    """
    version: pulumi.Output[str]
    """
    The Version number of this API, if this API is versioned.
    """
    version_set_id: pulumi.Output[str]
    """
    The ID of the Version Set which this API is associated with.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, description=None, display_name=None, import_=None, name=None, path=None, protocols=None, resource_group_name=None, revision=None, service_url=None, soap_pass_through=None, subscription_key_parameter_names=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an API within an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_management_name: The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] description: A description of the API Management API, which may include HTML formatting tags.
        :param pulumi.Input[str] display_name: The display name of the API.
        :param pulumi.Input[dict] import_: A `import` block as documented below.
        :param pulumi.Input[str] name: The name of the API Management API. Changing this forces a new resource to be created.
        :param pulumi.Input[str] path: The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
        :param pulumi.Input[list] protocols: A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
        :param pulumi.Input[str] resource_group_name: The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] revision: The Revision which used for this API.
        :param pulumi.Input[str] service_url: Absolute URL of the backend service implementing this API.
        :param pulumi.Input[bool] soap_pass_through: Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
        :param pulumi.Input[dict] subscription_key_parameter_names: A `subscription_key_parameter_names` block as documented below.
        
        The **import_** object supports the following:
        
          * `contentFormat` (`pulumi.Input[str]`)
          * `contentValue` (`pulumi.Input[str]`)
          * `wsdlSelector` (`pulumi.Input[dict]`)
        
            * `endpointName` (`pulumi.Input[str]`)
            * `serviceName` (`pulumi.Input[str]`)
        
        The **subscription_key_parameter_names** object supports the following:
        
          * `header` (`pulumi.Input[str]`)
          * `query` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_api.html.markdown.
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

            if api_management_name is None:
                raise TypeError("Missing required property 'api_management_name'")
            __props__['api_management_name'] = api_management_name
            __props__['description'] = description
            if display_name is None:
                raise TypeError("Missing required property 'display_name'")
            __props__['display_name'] = display_name
            __props__['import_'] = import_
            __props__['name'] = name
            if path is None:
                raise TypeError("Missing required property 'path'")
            __props__['path'] = path
            if protocols is None:
                raise TypeError("Missing required property 'protocols'")
            __props__['protocols'] = protocols
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if revision is None:
                raise TypeError("Missing required property 'revision'")
            __props__['revision'] = revision
            __props__['service_url'] = service_url
            __props__['soap_pass_through'] = soap_pass_through
            __props__['subscription_key_parameter_names'] = subscription_key_parameter_names
            __props__['is_current'] = None
            __props__['is_online'] = None
            __props__['version'] = None
            __props__['version_set_id'] = None
        super(Api, __self__).__init__(
            'azure:apimanagement/api:Api',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, api_management_name=None, description=None, display_name=None, import_=None, is_current=None, is_online=None, name=None, path=None, protocols=None, resource_group_name=None, revision=None, service_url=None, soap_pass_through=None, subscription_key_parameter_names=None, version=None, version_set_id=None):
        """
        Get an existing Api resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_management_name: The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] description: A description of the API Management API, which may include HTML formatting tags.
        :param pulumi.Input[str] display_name: The display name of the API.
        :param pulumi.Input[dict] import_: A `import` block as documented below.
        :param pulumi.Input[bool] is_current: Is this the current API Revision?
        :param pulumi.Input[bool] is_online: Is this API Revision online/accessible via the Gateway?
        :param pulumi.Input[str] name: The name of the API Management API. Changing this forces a new resource to be created.
        :param pulumi.Input[str] path: The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
        :param pulumi.Input[list] protocols: A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
        :param pulumi.Input[str] resource_group_name: The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] revision: The Revision which used for this API.
        :param pulumi.Input[str] service_url: Absolute URL of the backend service implementing this API.
        :param pulumi.Input[bool] soap_pass_through: Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
        :param pulumi.Input[dict] subscription_key_parameter_names: A `subscription_key_parameter_names` block as documented below.
        :param pulumi.Input[str] version: The Version number of this API, if this API is versioned.
        :param pulumi.Input[str] version_set_id: The ID of the Version Set which this API is associated with.
        
        The **import_** object supports the following:
        
          * `contentFormat` (`pulumi.Input[str]`)
          * `contentValue` (`pulumi.Input[str]`)
          * `wsdlSelector` (`pulumi.Input[dict]`)
        
            * `endpointName` (`pulumi.Input[str]`)
            * `serviceName` (`pulumi.Input[str]`)
        
        The **subscription_key_parameter_names** object supports the following:
        
          * `header` (`pulumi.Input[str]`)
          * `query` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_api.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["api_management_name"] = api_management_name
        __props__["description"] = description
        __props__["display_name"] = display_name
        __props__["import_"] = import_
        __props__["is_current"] = is_current
        __props__["is_online"] = is_online
        __props__["name"] = name
        __props__["path"] = path
        __props__["protocols"] = protocols
        __props__["resource_group_name"] = resource_group_name
        __props__["revision"] = revision
        __props__["service_url"] = service_url
        __props__["soap_pass_through"] = soap_pass_through
        __props__["subscription_key_parameter_names"] = subscription_key_parameter_names
        __props__["version"] = version
        __props__["version_set_id"] = version_set_id
        return Api(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

