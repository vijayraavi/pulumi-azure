# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class SourceCodeToken(pulumi.CustomResource):
    token: pulumi.Output[str]
    """
    The OAuth access token.
    """
    token_secret: pulumi.Output[str]
    """
    The OAuth access token secret.
    """
    type: pulumi.Output[str]
    """
    The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.
    """
    def __init__(__self__, resource_name, opts=None, token=None, token_secret=None, type=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an App Service source control token.
        
        > **NOTE:** Source Control Token's are configured at the subscription level, not on each App Service - as such this can only be configured Subscription-wide
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] token: The OAuth access token.
        :param pulumi.Input[str] token_secret: The OAuth access token secret.
        :param pulumi.Input[str] type: The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/app_service_source_control_token.html.markdown.
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

            if token is None:
                raise TypeError("Missing required property 'token'")
            __props__['token'] = token
            __props__['token_secret'] = token_secret
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
        super(SourceCodeToken, __self__).__init__(
            'azure:appservice/sourceCodeToken:SourceCodeToken',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, token=None, token_secret=None, type=None):
        """
        Get an existing SourceCodeToken resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] token: The OAuth access token.
        :param pulumi.Input[str] token_secret: The OAuth access token secret.
        :param pulumi.Input[str] type: The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/app_service_source_control_token.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["token"] = token
        __props__["token_secret"] = token_secret
        __props__["type"] = type
        return SourceCodeToken(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

