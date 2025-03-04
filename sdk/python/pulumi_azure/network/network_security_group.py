# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class NetworkSecurityGroup(pulumi.CustomResource):
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the security rule.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
    """
    security_rules: pulumi.Output[list]
    """
    [List of objects](https://www.terraform.io/docs/configuration/attr-as-blocks.html) representing security rules, as defined below.
    
      * `access` (`str`) - Specifies whether network traffic is allowed or denied. Possible values are `Allow` and `Deny`.
      * `description` (`str`) - A description for this rule. Restricted to 140 characters.
      * `destination_address_prefix` (`str`) - CIDR or destination IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `destination_address_prefixes` is not specified.
      * `destination_address_prefixes` (`list`) - List of destination address prefixes. Tags may not be used. This is required if `destination_address_prefix` is not specified.
      * `destination_application_security_group_ids` (`list`) - A List of destination Application Security Group ID's
      * `destination_port_range` (`str`) - Destination Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `destination_port_ranges` is not specified.
      * `destination_port_ranges` (`list`) - List of destination ports or port ranges. This is required if `destination_port_range` is not specified.
      * `direction` (`str`) - The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are `Inbound` and `Outbound`.
      * `name` (`str`) - The name of the security rule.
      * `priority` (`float`) - Specifies the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
      * `protocol` (`str`) - Network protocol this rule applies to. Can be `Tcp`, `Udp` or `*` to match both.
      * `source_address_prefix` (`str`) - CIDR or source IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `source_address_prefixes` is not specified.
      * `source_address_prefixes` (`list`) - List of source address prefixes. Tags may not be used. This is required if `source_address_prefix` is not specified.
      * `source_application_security_group_ids` (`list`) - A List of source Application Security Group ID's
      * `source_port_range` (`str`) - Source Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `source_port_ranges` is not specified.
      * `source_port_ranges` (`list`) - List of source ports or port ranges. This is required if `source_port_range` is not specified.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, resource_group_name=None, security_rules=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a network security group that contains a list of network security rules.  Network security groups enable inbound or outbound traffic to be enabled or denied.
        
        > **NOTE on Network Security Groups and Network Security Rules:** This provider currently
        provides both a standalone Network Security Rule resource, and allows for Network Security Rules to be defined in-line within the Network Security Group resource.
        At this time you cannot use a Network Security Group with in-line Network Security Rules in conjunction with any Network Security Rule resources. Doing so will cause a conflict of rule settings and will overwrite rules.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the security rule.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
        :param pulumi.Input[list] security_rules: [List of objects](https://www.terraform.io/docs/configuration/attr-as-blocks.html) representing security rules, as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **security_rules** object supports the following:
        
          * `access` (`pulumi.Input[str]`) - Specifies whether network traffic is allowed or denied. Possible values are `Allow` and `Deny`.
          * `description` (`pulumi.Input[str]`) - A description for this rule. Restricted to 140 characters.
          * `destination_address_prefix` (`pulumi.Input[str]`) - CIDR or destination IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `destination_address_prefixes` is not specified.
          * `destination_address_prefixes` (`pulumi.Input[list]`) - List of destination address prefixes. Tags may not be used. This is required if `destination_address_prefix` is not specified.
          * `destination_application_security_group_ids` (`pulumi.Input[list]`) - A List of destination Application Security Group ID's
          * `destination_port_range` (`pulumi.Input[str]`) - Destination Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `destination_port_ranges` is not specified.
          * `destination_port_ranges` (`pulumi.Input[list]`) - List of destination ports or port ranges. This is required if `destination_port_range` is not specified.
          * `direction` (`pulumi.Input[str]`) - The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are `Inbound` and `Outbound`.
          * `name` (`pulumi.Input[str]`) - The name of the security rule.
          * `priority` (`pulumi.Input[float]`) - Specifies the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
          * `protocol` (`pulumi.Input[str]`) - Network protocol this rule applies to. Can be `Tcp`, `Udp` or `*` to match both.
          * `source_address_prefix` (`pulumi.Input[str]`) - CIDR or source IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `source_address_prefixes` is not specified.
          * `source_address_prefixes` (`pulumi.Input[list]`) - List of source address prefixes. Tags may not be used. This is required if `source_address_prefix` is not specified.
          * `source_application_security_group_ids` (`pulumi.Input[list]`) - A List of source Application Security Group ID's
          * `source_port_range` (`pulumi.Input[str]`) - Source Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `source_port_ranges` is not specified.
          * `source_port_ranges` (`pulumi.Input[list]`) - List of source ports or port ranges. This is required if `source_port_range` is not specified.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_security_group.html.markdown.
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

            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['security_rules'] = security_rules
            __props__['tags'] = tags
        super(NetworkSecurityGroup, __self__).__init__(
            'azure:network/networkSecurityGroup:NetworkSecurityGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, location=None, name=None, resource_group_name=None, security_rules=None, tags=None):
        """
        Get an existing NetworkSecurityGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the security rule.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
        :param pulumi.Input[list] security_rules: [List of objects](https://www.terraform.io/docs/configuration/attr-as-blocks.html) representing security rules, as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **security_rules** object supports the following:
        
          * `access` (`pulumi.Input[str]`) - Specifies whether network traffic is allowed or denied. Possible values are `Allow` and `Deny`.
          * `description` (`pulumi.Input[str]`) - A description for this rule. Restricted to 140 characters.
          * `destination_address_prefix` (`pulumi.Input[str]`) - CIDR or destination IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `destination_address_prefixes` is not specified.
          * `destination_address_prefixes` (`pulumi.Input[list]`) - List of destination address prefixes. Tags may not be used. This is required if `destination_address_prefix` is not specified.
          * `destination_application_security_group_ids` (`pulumi.Input[list]`) - A List of destination Application Security Group ID's
          * `destination_port_range` (`pulumi.Input[str]`) - Destination Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `destination_port_ranges` is not specified.
          * `destination_port_ranges` (`pulumi.Input[list]`) - List of destination ports or port ranges. This is required if `destination_port_range` is not specified.
          * `direction` (`pulumi.Input[str]`) - The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are `Inbound` and `Outbound`.
          * `name` (`pulumi.Input[str]`) - The name of the security rule.
          * `priority` (`pulumi.Input[float]`) - Specifies the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
          * `protocol` (`pulumi.Input[str]`) - Network protocol this rule applies to. Can be `Tcp`, `Udp` or `*` to match both.
          * `source_address_prefix` (`pulumi.Input[str]`) - CIDR or source IP range or * to match any IP. Tags such as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used. This is required if `source_address_prefixes` is not specified.
          * `source_address_prefixes` (`pulumi.Input[list]`) - List of source address prefixes. Tags may not be used. This is required if `source_address_prefix` is not specified.
          * `source_application_security_group_ids` (`pulumi.Input[list]`) - A List of source Application Security Group ID's
          * `source_port_range` (`pulumi.Input[str]`) - Source Port or Range. Integer or range between `0` and `65535` or `*` to match any. This is required if `source_port_ranges` is not specified.
          * `source_port_ranges` (`pulumi.Input[list]`) - List of source ports or port ranges. This is required if `source_port_range` is not specified.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_security_group.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["security_rules"] = security_rules
        __props__["tags"] = tags
        return NetworkSecurityGroup(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

