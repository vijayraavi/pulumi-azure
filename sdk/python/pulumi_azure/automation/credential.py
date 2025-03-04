# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Credential(pulumi.CustomResource):
    account_name: pulumi.Output[str]
    """
    The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
    """
    description: pulumi.Output[str]
    """
    The description associated with this Automation Credential.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Credential. Changing this forces a new resource to be created.
    """
    password: pulumi.Output[str]
    """
    The password associated with this Automation Credential.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
    """
    username: pulumi.Output[str]
    """
    The username associated with this Automation Credential.
    """
    def __init__(__self__, resource_name, opts=None, account_name=None, description=None, name=None, password=None, resource_group_name=None, username=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Automation Credential.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] account_name: The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] description: The description associated with this Automation Credential.
        :param pulumi.Input[str] name: Specifies the name of the Credential. Changing this forces a new resource to be created.
        :param pulumi.Input[str] password: The password associated with this Automation Credential.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] username: The username associated with this Automation Credential.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_credential.html.markdown.
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

            if account_name is None:
                raise TypeError("Missing required property 'account_name'")
            __props__['account_name'] = account_name
            __props__['description'] = description
            __props__['name'] = name
            if password is None:
                raise TypeError("Missing required property 'password'")
            __props__['password'] = password
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if username is None:
                raise TypeError("Missing required property 'username'")
            __props__['username'] = username
        super(Credential, __self__).__init__(
            'azure:automation/credential:Credential',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, account_name=None, description=None, name=None, password=None, resource_group_name=None, username=None):
        """
        Get an existing Credential resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] account_name: The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] description: The description associated with this Automation Credential.
        :param pulumi.Input[str] name: Specifies the name of the Credential. Changing this forces a new resource to be created.
        :param pulumi.Input[str] password: The password associated with this Automation Credential.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] username: The username associated with this Automation Credential.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_credential.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["account_name"] = account_name
        __props__["description"] = description
        __props__["name"] = name
        __props__["password"] = password
        __props__["resource_group_name"] = resource_group_name
        __props__["username"] = username
        return Credential(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

