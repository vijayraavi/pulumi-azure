// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages attaching a Disk to a Virtual Machine.
 * 
 * > **NOTE:** Data Disks can be attached either directly on the `azure.compute.VirtualMachine` resource, or using the `azure.compute.DataDiskAttachment` resource - but the two cannot be used together. If both are used against the same Virtual Machine, spurious changes will occur.
 * 
 * > **Please Note:** only Managed Disks are supported via this separate resource, Unmanaged Disks can be attached using the `storageDataDisk` block in the `azure.compute.VirtualMachine` resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const config = new pulumi.Config();
 * const prefix = config.get("prefix") || "example";
 * 
 * const vmName = `${prefix}-vm`;
 * const mainResourceGroup = new azure.core.ResourceGroup("main", {
 *     location: "West Europe",
 *     name: `${prefix}-resources`,
 * });
 * const mainVirtualNetwork = new azure.network.VirtualNetwork("main", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: mainResourceGroup.location,
 *     name: `${prefix}-network`,
 *     resourceGroupName: mainResourceGroup.name,
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "internal",
 *     resourceGroupName: mainResourceGroup.name,
 *     virtualNetworkName: mainVirtualNetwork.name,
 * });
 * const mainNetworkInterface = new azure.network.NetworkInterface("main", {
 *     ipConfigurations: [{
 *         name: "internal",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: internal.id,
 *     }],
 *     location: mainResourceGroup.location,
 *     name: `${prefix}-nic`,
 *     resourceGroupName: mainResourceGroup.name,
 * });
 * const testVirtualMachine = new azure.compute.VirtualMachine("test", {
 *     location: mainResourceGroup.location,
 *     name: vmName,
 *     networkInterfaceIds: [mainNetworkInterface.id],
 *     osProfile: {
 *         adminPassword: "Password1234!",
 *         adminUsername: "testadmin",
 *         computerName: vmName,
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 *     resourceGroupName: mainResourceGroup.name,
 *     storageImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *         name: "myosdisk1",
 *     },
 *     vmSize: "Standard_F2",
 * });
 * const testManagedDisk = new azure.compute.ManagedDisk("test", {
 *     createOption: "Empty",
 *     diskSizeGb: 10,
 *     location: mainResourceGroup.location,
 *     name: `${vmName}-disk1`,
 *     resourceGroupName: mainResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 * });
 * const testDataDiskAttachment = new azure.compute.DataDiskAttachment("test", {
 *     caching: "ReadWrite",
 *     lun: 10,
 *     managedDiskId: testManagedDisk.id,
 *     virtualMachineId: testVirtualMachine.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_machine_data_disk_attachment.html.markdown.
 */
export class DataDiskAttachment extends pulumi.CustomResource {
    /**
     * Get an existing DataDiskAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataDiskAttachmentState, opts?: pulumi.CustomResourceOptions): DataDiskAttachment {
        return new DataDiskAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/dataDiskAttachment:DataDiskAttachment';

    /**
     * Returns true if the given object is an instance of DataDiskAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataDiskAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataDiskAttachment.__pulumiType;
    }

    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    public readonly caching!: pulumi.Output<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    public readonly createOption!: pulumi.Output<string | undefined>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly lun!: pulumi.Output<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    public readonly managedDiskId!: pulumi.Output<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    public readonly virtualMachineId!: pulumi.Output<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    public readonly writeAcceleratorEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a DataDiskAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataDiskAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataDiskAttachmentArgs | DataDiskAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DataDiskAttachmentState | undefined;
            inputs["caching"] = state ? state.caching : undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["lun"] = state ? state.lun : undefined;
            inputs["managedDiskId"] = state ? state.managedDiskId : undefined;
            inputs["virtualMachineId"] = state ? state.virtualMachineId : undefined;
            inputs["writeAcceleratorEnabled"] = state ? state.writeAcceleratorEnabled : undefined;
        } else {
            const args = argsOrState as DataDiskAttachmentArgs | undefined;
            if (!args || args.caching === undefined) {
                throw new Error("Missing required property 'caching'");
            }
            if (!args || args.lun === undefined) {
                throw new Error("Missing required property 'lun'");
            }
            if (!args || args.managedDiskId === undefined) {
                throw new Error("Missing required property 'managedDiskId'");
            }
            if (!args || args.virtualMachineId === undefined) {
                throw new Error("Missing required property 'virtualMachineId'");
            }
            inputs["caching"] = args ? args.caching : undefined;
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["lun"] = args ? args.lun : undefined;
            inputs["managedDiskId"] = args ? args.managedDiskId : undefined;
            inputs["virtualMachineId"] = args ? args.virtualMachineId : undefined;
            inputs["writeAcceleratorEnabled"] = args ? args.writeAcceleratorEnabled : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DataDiskAttachment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DataDiskAttachment resources.
 */
export interface DataDiskAttachmentState {
    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    readonly caching?: pulumi.Input<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly lun?: pulumi.Input<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    readonly managedDiskId?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    readonly virtualMachineId?: pulumi.Input<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    readonly writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DataDiskAttachment resource.
 */
export interface DataDiskAttachmentArgs {
    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    readonly caching: pulumi.Input<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly lun: pulumi.Input<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    readonly managedDiskId: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    readonly virtualMachineId: pulumi.Input<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    readonly writeAcceleratorEnabled?: pulumi.Input<boolean>;
}
