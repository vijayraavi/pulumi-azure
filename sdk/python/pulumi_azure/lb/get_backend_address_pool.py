# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetBackendAddressPoolResult:
    """
    A collection of values returned by getBackendAddressPool.
    """
    def __init__(__self__, loadbalancer_id=None, name=None, id=None):
        if loadbalancer_id and not isinstance(loadbalancer_id, str):
            raise TypeError("Expected argument 'loadbalancer_id' to be a str")
        __self__.loadbalancer_id = loadbalancer_id
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetBackendAddressPoolResult(GetBackendAddressPoolResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetBackendAddressPoolResult(
            loadbalancer_id=self.loadbalancer_id,
            name=self.name,
            id=self.id)

def get_backend_address_pool(loadbalancer_id=None,name=None,opts=None):
    """
    Use this data source to access information about an existing Load Balancer Backend Address Pool.
    
    :param str loadbalancer_id: The ID of the Load Balancer in which the Backend Address Pool exists.
    :param str name: Specifies the name of the Backend Address Pool.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/lb_backend_address_pool.html.markdown.
    """
    __args__ = dict()

    __args__['loadbalancerId'] = loadbalancer_id
    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:lb/getBackendAddressPool:getBackendAddressPool', __args__, opts=opts).value

    return AwaitableGetBackendAddressPoolResult(
        loadbalancer_id=__ret__.get('loadbalancerId'),
        name=__ret__.get('name'),
        id=__ret__.get('id'))
