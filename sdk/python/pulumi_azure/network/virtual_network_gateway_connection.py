# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class VirtualNetworkGatewayConnection(pulumi.CustomResource):
    authorization_key: pulumi.Output[str]
    """
    The authorization key associated with the
    Express Route Circuit. This field is required only if the type is an
    ExpressRoute connection.
    """
    enable_bgp: pulumi.Output[bool]
    """
    If `true`, BGP (Border Gateway Protocol) is enabled
    for this connection. Defaults to `false`.
    """
    express_route_circuit_id: pulumi.Output[str]
    """
    The ID of the Express Route Circuit
    when creating an ExpressRoute connection (i.e. when `type` is `ExpressRoute`).
    The Express Route Circuit can be in the same or in a different subscription.
    """
    express_route_gateway_bypass: pulumi.Output[bool]
    """
    If `true`, data packets will bypass ExpressRoute Gateway for data forwarding This is only valid for ExpressRoute connections.
    """
    ipsec_policy: pulumi.Output[dict]
    """
    A `ipsec_policy` block which is documented below.
    Only a single policy can be defined for a connection. For details on
    custom policies refer to [the relevant section in the Azure documentation](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-ipsecikepolicy-rm-powershell).
    
      * `dhGroup` (`str`)
      * `ikeEncryption` (`str`)
      * `ikeIntegrity` (`str`)
      * `ipsecEncryption` (`str`)
      * `ipsecIntegrity` (`str`)
      * `pfsGroup` (`str`)
      * `saDatasize` (`float`)
      * `saLifetime` (`float`)
    """
    local_network_gateway_id: pulumi.Output[str]
    """
    The ID of the local network gateway
    when creating Site-to-Site connection (i.e. when `type` is `IPsec`).
    """
    location: pulumi.Output[str]
    """
    The location/region where the connection is
    located. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the connection. Changing the name forces a
    new resource to be created.
    """
    peer_virtual_network_gateway_id: pulumi.Output[str]
    """
    The ID of the peer virtual
    network gateway when creating a VNet-to-VNet connection (i.e. when `type`
    is `Vnet2Vnet`). The peer Virtual Network Gateway can be in the same or
    in a different subscription.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the connection Changing the name forces a new resource to be created.
    """
    routing_weight: pulumi.Output[float]
    """
    The routing weight. Defaults to `10`.
    """
    shared_key: pulumi.Output[str]
    """
    The shared IPSec key. A key must be provided if a
    Site-to-Site or VNet-to-VNet connection is created whereas ExpressRoute
    connections do not need a shared key.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    """
    The type of connection. Valid options are `IPsec`
    (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
    Each connection type requires different mandatory arguments (refer to the
    examples above). Changing the connection type will force a new connection
    to be created.
    """
    use_policy_based_traffic_selectors: pulumi.Output[bool]
    """
    If `true`, policy-based traffic
    selectors are enabled for this connection. Enabling policy-based traffic
    selectors requires an `ipsec_policy` block. Defaults to `false`.
    """
    virtual_network_gateway_id: pulumi.Output[str]
    """
    The ID of the Virtual Network Gateway
    in which the connection will be created. Changing the gateway forces a new
    resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, authorization_key=None, enable_bgp=None, express_route_circuit_id=None, express_route_gateway_bypass=None, ipsec_policy=None, local_network_gateway_id=None, location=None, name=None, peer_virtual_network_gateway_id=None, resource_group_name=None, routing_weight=None, shared_key=None, tags=None, type=None, use_policy_based_traffic_selectors=None, virtual_network_gateway_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a connection in an existing Virtual Network Gateway.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authorization_key: The authorization key associated with the
               Express Route Circuit. This field is required only if the type is an
               ExpressRoute connection.
        :param pulumi.Input[bool] enable_bgp: If `true`, BGP (Border Gateway Protocol) is enabled
               for this connection. Defaults to `false`.
        :param pulumi.Input[str] express_route_circuit_id: The ID of the Express Route Circuit
               when creating an ExpressRoute connection (i.e. when `type` is `ExpressRoute`).
               The Express Route Circuit can be in the same or in a different subscription.
        :param pulumi.Input[bool] express_route_gateway_bypass: If `true`, data packets will bypass ExpressRoute Gateway for data forwarding This is only valid for ExpressRoute connections.
        :param pulumi.Input[dict] ipsec_policy: A `ipsec_policy` block which is documented below.
               Only a single policy can be defined for a connection. For details on
               custom policies refer to [the relevant section in the Azure documentation](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-ipsecikepolicy-rm-powershell).
        :param pulumi.Input[str] local_network_gateway_id: The ID of the local network gateway
               when creating Site-to-Site connection (i.e. when `type` is `IPsec`).
        :param pulumi.Input[str] location: The location/region where the connection is
               located. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the connection. Changing the name forces a
               new resource to be created.
        :param pulumi.Input[str] peer_virtual_network_gateway_id: The ID of the peer virtual
               network gateway when creating a VNet-to-VNet connection (i.e. when `type`
               is `Vnet2Vnet`). The peer Virtual Network Gateway can be in the same or
               in a different subscription.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the connection Changing the name forces a new resource to be created.
        :param pulumi.Input[float] routing_weight: The routing weight. Defaults to `10`.
        :param pulumi.Input[str] shared_key: The shared IPSec key. A key must be provided if a
               Site-to-Site or VNet-to-VNet connection is created whereas ExpressRoute
               connections do not need a shared key.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of connection. Valid options are `IPsec`
               (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
               Each connection type requires different mandatory arguments (refer to the
               examples above). Changing the connection type will force a new connection
               to be created.
        :param pulumi.Input[bool] use_policy_based_traffic_selectors: If `true`, policy-based traffic
               selectors are enabled for this connection. Enabling policy-based traffic
               selectors requires an `ipsec_policy` block. Defaults to `false`.
        :param pulumi.Input[str] virtual_network_gateway_id: The ID of the Virtual Network Gateway
               in which the connection will be created. Changing the gateway forces a new
               resource to be created.
        
        The **ipsec_policy** object supports the following:
        
          * `dhGroup` (`pulumi.Input[str]`)
          * `ikeEncryption` (`pulumi.Input[str]`)
          * `ikeIntegrity` (`pulumi.Input[str]`)
          * `ipsecEncryption` (`pulumi.Input[str]`)
          * `ipsecIntegrity` (`pulumi.Input[str]`)
          * `pfsGroup` (`pulumi.Input[str]`)
          * `saDatasize` (`pulumi.Input[float]`)
          * `saLifetime` (`pulumi.Input[float]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network_gateway_connection.html.markdown.
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

            __props__['authorization_key'] = authorization_key
            __props__['enable_bgp'] = enable_bgp
            __props__['express_route_circuit_id'] = express_route_circuit_id
            __props__['express_route_gateway_bypass'] = express_route_gateway_bypass
            __props__['ipsec_policy'] = ipsec_policy
            __props__['local_network_gateway_id'] = local_network_gateway_id
            __props__['location'] = location
            __props__['name'] = name
            __props__['peer_virtual_network_gateway_id'] = peer_virtual_network_gateway_id
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['routing_weight'] = routing_weight
            __props__['shared_key'] = shared_key
            __props__['tags'] = tags
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            __props__['use_policy_based_traffic_selectors'] = use_policy_based_traffic_selectors
            if virtual_network_gateway_id is None:
                raise TypeError("Missing required property 'virtual_network_gateway_id'")
            __props__['virtual_network_gateway_id'] = virtual_network_gateway_id
        super(VirtualNetworkGatewayConnection, __self__).__init__(
            'azure:network/virtualNetworkGatewayConnection:VirtualNetworkGatewayConnection',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, authorization_key=None, enable_bgp=None, express_route_circuit_id=None, express_route_gateway_bypass=None, ipsec_policy=None, local_network_gateway_id=None, location=None, name=None, peer_virtual_network_gateway_id=None, resource_group_name=None, routing_weight=None, shared_key=None, tags=None, type=None, use_policy_based_traffic_selectors=None, virtual_network_gateway_id=None):
        """
        Get an existing VirtualNetworkGatewayConnection resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authorization_key: The authorization key associated with the
               Express Route Circuit. This field is required only if the type is an
               ExpressRoute connection.
        :param pulumi.Input[bool] enable_bgp: If `true`, BGP (Border Gateway Protocol) is enabled
               for this connection. Defaults to `false`.
        :param pulumi.Input[str] express_route_circuit_id: The ID of the Express Route Circuit
               when creating an ExpressRoute connection (i.e. when `type` is `ExpressRoute`).
               The Express Route Circuit can be in the same or in a different subscription.
        :param pulumi.Input[bool] express_route_gateway_bypass: If `true`, data packets will bypass ExpressRoute Gateway for data forwarding This is only valid for ExpressRoute connections.
        :param pulumi.Input[dict] ipsec_policy: A `ipsec_policy` block which is documented below.
               Only a single policy can be defined for a connection. For details on
               custom policies refer to [the relevant section in the Azure documentation](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-ipsecikepolicy-rm-powershell).
        :param pulumi.Input[str] local_network_gateway_id: The ID of the local network gateway
               when creating Site-to-Site connection (i.e. when `type` is `IPsec`).
        :param pulumi.Input[str] location: The location/region where the connection is
               located. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the connection. Changing the name forces a
               new resource to be created.
        :param pulumi.Input[str] peer_virtual_network_gateway_id: The ID of the peer virtual
               network gateway when creating a VNet-to-VNet connection (i.e. when `type`
               is `Vnet2Vnet`). The peer Virtual Network Gateway can be in the same or
               in a different subscription.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the connection Changing the name forces a new resource to be created.
        :param pulumi.Input[float] routing_weight: The routing weight. Defaults to `10`.
        :param pulumi.Input[str] shared_key: The shared IPSec key. A key must be provided if a
               Site-to-Site or VNet-to-VNet connection is created whereas ExpressRoute
               connections do not need a shared key.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of connection. Valid options are `IPsec`
               (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
               Each connection type requires different mandatory arguments (refer to the
               examples above). Changing the connection type will force a new connection
               to be created.
        :param pulumi.Input[bool] use_policy_based_traffic_selectors: If `true`, policy-based traffic
               selectors are enabled for this connection. Enabling policy-based traffic
               selectors requires an `ipsec_policy` block. Defaults to `false`.
        :param pulumi.Input[str] virtual_network_gateway_id: The ID of the Virtual Network Gateway
               in which the connection will be created. Changing the gateway forces a new
               resource to be created.
        
        The **ipsec_policy** object supports the following:
        
          * `dhGroup` (`pulumi.Input[str]`)
          * `ikeEncryption` (`pulumi.Input[str]`)
          * `ikeIntegrity` (`pulumi.Input[str]`)
          * `ipsecEncryption` (`pulumi.Input[str]`)
          * `ipsecIntegrity` (`pulumi.Input[str]`)
          * `pfsGroup` (`pulumi.Input[str]`)
          * `saDatasize` (`pulumi.Input[float]`)
          * `saLifetime` (`pulumi.Input[float]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network_gateway_connection.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["authorization_key"] = authorization_key
        __props__["enable_bgp"] = enable_bgp
        __props__["express_route_circuit_id"] = express_route_circuit_id
        __props__["express_route_gateway_bypass"] = express_route_gateway_bypass
        __props__["ipsec_policy"] = ipsec_policy
        __props__["local_network_gateway_id"] = local_network_gateway_id
        __props__["location"] = location
        __props__["name"] = name
        __props__["peer_virtual_network_gateway_id"] = peer_virtual_network_gateway_id
        __props__["resource_group_name"] = resource_group_name
        __props__["routing_weight"] = routing_weight
        __props__["shared_key"] = shared_key
        __props__["tags"] = tags
        __props__["type"] = type
        __props__["use_policy_based_traffic_selectors"] = use_policy_based_traffic_selectors
        __props__["virtual_network_gateway_id"] = virtual_network_gateway_id
        return VirtualNetworkGatewayConnection(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

