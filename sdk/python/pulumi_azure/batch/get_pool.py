# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetPoolResult:
    """
    A collection of values returned by getPool.
    """
    def __init__(__self__, account_name=None, auto_scales=None, certificates=None, container_configurations=None, display_name=None, fixed_scales=None, max_tasks_per_node=None, name=None, node_agent_sku_id=None, resource_group_name=None, start_task=None, storage_image_references=None, vm_size=None, id=None):
        if account_name and not isinstance(account_name, str):
            raise TypeError("Expected argument 'account_name' to be a str")
        __self__.account_name = account_name
        """
        The name of the Batch account.
        """
        if auto_scales and not isinstance(auto_scales, list):
            raise TypeError("Expected argument 'auto_scales' to be a list")
        __self__.auto_scales = auto_scales
        """
        A `auto_scale` block that describes the scale settings when using auto scale.
        """
        if certificates and not isinstance(certificates, list):
            raise TypeError("Expected argument 'certificates' to be a list")
        __self__.certificates = certificates
        """
        One or more `certificate` blocks that describe the certificates installed on each compute node in the pool.
        """
        if container_configurations and not isinstance(container_configurations, list):
            raise TypeError("Expected argument 'container_configurations' to be a list")
        __self__.container_configurations = container_configurations
        """
        The container configuration used in the pool's VMs.
        """
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        __self__.display_name = display_name
        if fixed_scales and not isinstance(fixed_scales, list):
            raise TypeError("Expected argument 'fixed_scales' to be a list")
        __self__.fixed_scales = fixed_scales
        """
        A `fixed_scale` block that describes the scale settings when using fixed scale.
        """
        if max_tasks_per_node and not isinstance(max_tasks_per_node, float):
            raise TypeError("Expected argument 'max_tasks_per_node' to be a float")
        __self__.max_tasks_per_node = max_tasks_per_node
        """
        The maximum number of tasks that can run concurrently on a single compute node in the pool.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the Batch pool.
        """
        if node_agent_sku_id and not isinstance(node_agent_sku_id, str):
            raise TypeError("Expected argument 'node_agent_sku_id' to be a str")
        __self__.node_agent_sku_id = node_agent_sku_id
        """
        The Sku of the node agents in the Batch pool.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if start_task and not isinstance(start_task, dict):
            raise TypeError("Expected argument 'start_task' to be a dict")
        __self__.start_task = start_task
        """
        A `start_task` block that describes the start task settings for the Batch pool.
        """
        if storage_image_references and not isinstance(storage_image_references, list):
            raise TypeError("Expected argument 'storage_image_references' to be a list")
        __self__.storage_image_references = storage_image_references
        """
        The reference of the storage image used by the nodes in the Batch pool.
        """
        if vm_size and not isinstance(vm_size, str):
            raise TypeError("Expected argument 'vm_size' to be a str")
        __self__.vm_size = vm_size
        """
        The size of the VM created in the Batch pool.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetPoolResult(GetPoolResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetPoolResult(
            account_name=self.account_name,
            auto_scales=self.auto_scales,
            certificates=self.certificates,
            container_configurations=self.container_configurations,
            display_name=self.display_name,
            fixed_scales=self.fixed_scales,
            max_tasks_per_node=self.max_tasks_per_node,
            name=self.name,
            node_agent_sku_id=self.node_agent_sku_id,
            resource_group_name=self.resource_group_name,
            start_task=self.start_task,
            storage_image_references=self.storage_image_references,
            vm_size=self.vm_size,
            id=self.id)

def get_pool(account_name=None,certificates=None,name=None,resource_group_name=None,start_task=None,opts=None):
    """
    Use this data source to access information about an existing Batch pool
    
    
    The **certificates** object supports the following:
    
      * `id` (`str`) - The fully qualified ID of the certificate installed on the pool.
      * `storeLocation` (`str`) - The location of the certificate store on the compute node into which the certificate is installed, either `CurrentUser` or `LocalMachine`.
      * `storeName` (`str`) - The name of the certificate store on the compute node into which the certificate is installed.
      * `visibilities` (`list`) - Which user accounts on the compute node have access to the private data of the certificate.
    
    The **start_task** object supports the following:
    
      * `commandLine` (`str`) - The command line executed by the start task.
      * `environment` (`dict`) - A map of strings (key,value) that represents the environment variables to set in the start task.
      * `maxTaskRetryCount` (`float`) - The number of retry count.
      * `resourceFiles` (`list`) - (Optional) One or more `resource_file` blocks that describe the files to be downloaded to a compute node.
    
        * `autoStorageContainerName` (`str`) - The storage container name in the auto storage account.
        * `blobPrefix` (`str`) - The blob prefix used when downloading blobs from an Azure Storage container.
        * `fileMode` (`str`) - The file permission mode attribute represented as a string in octal format (e.g. `"0644"`).
        * `filePath` (`str`) - The location on the compute node to which to download the file, relative to the task's working directory. If the `http_url` property is specified, the `file_path` is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the `auto_storage_container_name` or `storage_container_url` property is specified.
        * `httpUrl` (`str`) - The URL of the file to download. If the URL is Azure Blob Storage, it must be readable using anonymous access.
        * `storageContainerUrl` (`str`) - The URL of the blob container within Azure Blob Storage.
    
      * `userIdentities` (`list`) - A `user_identity` block that describes the user identity under which the start task runs.
    
        * `autoUsers` (`list`) - A `auto_user` block that describes the user identity under which the start task runs.
    
          * `elevationLevel` (`str`) - The elevation level of the user identity under which the start task runs.
          * `scope` (`str`) - The scope of the user identity under which the start task runs.
    
        * `userName` (`str`) - The user name to log into the registry server.
    
      * `waitForSuccess` (`bool`) - A flag that indicates if the Batch pool should wait for the start task to be completed.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/batch_pool.html.markdown.
    """
    __args__ = dict()

    __args__['accountName'] = account_name
    __args__['certificates'] = certificates
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['startTask'] = start_task
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:batch/getPool:getPool', __args__, opts=opts).value

    return AwaitableGetPoolResult(
        account_name=__ret__.get('accountName'),
        auto_scales=__ret__.get('autoScales'),
        certificates=__ret__.get('certificates'),
        container_configurations=__ret__.get('containerConfigurations'),
        display_name=__ret__.get('displayName'),
        fixed_scales=__ret__.get('fixedScales'),
        max_tasks_per_node=__ret__.get('maxTasksPerNode'),
        name=__ret__.get('name'),
        node_agent_sku_id=__ret__.get('nodeAgentSkuId'),
        resource_group_name=__ret__.get('resourceGroupName'),
        start_task=__ret__.get('startTask'),
        storage_image_references=__ret__.get('storageImageReferences'),
        vm_size=__ret__.get('vmSize'),
        id=__ret__.get('id'))
