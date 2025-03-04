// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a MySQL Server.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "api-rg-pro",
 * });
 * const testServer = new azure.mysql.Server("test", {
 *     administratorLogin: "mysqladminun",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     location: testResourceGroup.location,
 *     name: "mysql-server-1",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         capacity: 2,
 *         family: "Gen5",
 *         name: "B_Gen5_2",
 *         tier: "Basic",
 *     },
 *     sslEnforcement: "Enabled",
 *     storageProfile: {
 *         backupRetentionDays: 7,
 *         geoRedundantBackup: "Disabled",
 *         storageMb: 5120,
 *     },
 *     version: "5.7",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_server.html.markdown.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:mysql/server:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
     */
    public readonly administratorLogin!: pulumi.Output<string>;
    /**
     * The Password associated with the `administratorLogin` for the MySQL Server.
     */
    public readonly administratorLoginPassword!: pulumi.Output<string>;
    /**
     * The FQDN of the MySQL Server.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. B_Gen4_1, GP_Gen5_8). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku!: pulumi.Output<outputs.mysql.ServerSku>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
     */
    public readonly sslEnforcement!: pulumi.Output<string>;
    /**
     * A `storageProfile` block as defined below.
     */
    public readonly storageProfile!: pulumi.Output<outputs.mysql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the version of MySQL to use. Valid values are `5.6` and `5.7`. Changing this forces a new resource to be created.
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerArgs | ServerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ServerState | undefined;
            inputs["administratorLogin"] = state ? state.administratorLogin : undefined;
            inputs["administratorLoginPassword"] = state ? state.administratorLoginPassword : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["sslEnforcement"] = state ? state.sslEnforcement : undefined;
            inputs["storageProfile"] = state ? state.storageProfile : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ServerArgs | undefined;
            if (!args || args.administratorLogin === undefined) {
                throw new Error("Missing required property 'administratorLogin'");
            }
            if (!args || args.administratorLoginPassword === undefined) {
                throw new Error("Missing required property 'administratorLoginPassword'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            if (!args || args.sslEnforcement === undefined) {
                throw new Error("Missing required property 'sslEnforcement'");
            }
            if (!args || args.storageProfile === undefined) {
                throw new Error("Missing required property 'storageProfile'");
            }
            if (!args || args.version === undefined) {
                throw new Error("Missing required property 'version'");
            }
            inputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            inputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["sslEnforcement"] = args ? args.sslEnforcement : undefined;
            inputs["storageProfile"] = args ? args.storageProfile : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Server.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly administratorLogin?: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the MySQL Server.
     */
    readonly administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The FQDN of the MySQL Server.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. B_Gen4_1, GP_Gen5_8). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku?: pulumi.Input<inputs.mysql.ServerSku>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
     */
    readonly sslEnforcement?: pulumi.Input<string>;
    /**
     * A `storageProfile` block as defined below.
     */
    readonly storageProfile?: pulumi.Input<inputs.mysql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the version of MySQL to use. Valid values are `5.6` and `5.7`. Changing this forces a new resource to be created.
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly administratorLogin: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the MySQL Server.
     */
    readonly administratorLoginPassword: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. B_Gen4_1, GP_Gen5_8). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Input<inputs.mysql.ServerSku>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
     */
    readonly sslEnforcement: pulumi.Input<string>;
    /**
     * A `storageProfile` block as defined below.
     */
    readonly storageProfile: pulumi.Input<inputs.mysql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the version of MySQL to use. Valid values are `5.6` and `5.7`. Changing this forces a new resource to be created.
     */
    readonly version: pulumi.Input<string>;
}
