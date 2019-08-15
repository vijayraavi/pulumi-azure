// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a HDInsight Interactive Query Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const exampleAccount = new azure.storage.Account("example", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: exampleResourceGroup.location,
 *     name: "hdinsightstor",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleContainer = new azure.storage.Container("example", {
 *     containerAccessType: "private",
 *     name: "hdinsight",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountName: exampleAccount.name,
 * });
 * const exampleInteractiveQueryCluster = new azure.hdinsight.InteractiveQueryCluster("example", {
 *     clusterVersion: "3.6",
 *     componentVersion: {
 *         interactiveHive: "2.1",
 *     },
 *     gateway: {
 *         enabled: true,
 *         password: "TerrAform123!",
 *         username: "acctestusrgw",
 *     },
 *     location: exampleResourceGroup.location,
 *     name: "example-hdicluster",
 *     resourceGroupName: exampleResourceGroup.name,
 *     roles: {
 *         headNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D13_V2",
 *         },
 *         workerNode: {
 *             password: "AccTestvdSC4daf986!",
 *             targetInstanceCount: 3,
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D14_V2",
 *         },
 *         zookeeperNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_A4_V2",
 *         },
 *     },
 *     storageAccounts: [{
 *         isDefault: true,
 *         storageAccountKey: exampleAccount.primaryAccessKey,
 *         storageContainerId: exampleContainer.id,
 *     }],
 *     tier: "Standard",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/hdinsight_interactive_query_cluster.html.markdown.
 */
export class InteractiveQueryCluster extends pulumi.CustomResource {
    /**
     * Get an existing InteractiveQueryCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InteractiveQueryClusterState, opts?: pulumi.CustomResourceOptions): InteractiveQueryCluster {
        return new InteractiveQueryCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:hdinsight/interactiveQueryCluster:InteractiveQueryCluster';

    /**
     * Returns true if the given object is an instance of InteractiveQueryCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InteractiveQueryCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InteractiveQueryCluster.__pulumiType;
    }

    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    public readonly clusterVersion!: pulumi.Output<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    public readonly componentVersion!: pulumi.Output<outputApi.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    public readonly gateway!: pulumi.Output<outputApi.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    public /*out*/ readonly httpsEndpoint!: pulumi.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `roles` block as defined below.
     */
    public readonly roles!: pulumi.Output<outputApi.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    public /*out*/ readonly sshEndpoint!: pulumi.Output<string>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    public readonly storageAccounts!: pulumi.Output<outputApi.hdinsight.InteractiveQueryClusterStorageAccount[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    public readonly tier!: pulumi.Output<string>;

    /**
     * Create a InteractiveQueryCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InteractiveQueryClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InteractiveQueryClusterArgs | InteractiveQueryClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InteractiveQueryClusterState | undefined;
            inputs["clusterVersion"] = state ? state.clusterVersion : undefined;
            inputs["componentVersion"] = state ? state.componentVersion : undefined;
            inputs["gateway"] = state ? state.gateway : undefined;
            inputs["httpsEndpoint"] = state ? state.httpsEndpoint : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["sshEndpoint"] = state ? state.sshEndpoint : undefined;
            inputs["storageAccounts"] = state ? state.storageAccounts : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as InteractiveQueryClusterArgs | undefined;
            if (!args || args.clusterVersion === undefined) {
                throw new Error("Missing required property 'clusterVersion'");
            }
            if (!args || args.componentVersion === undefined) {
                throw new Error("Missing required property 'componentVersion'");
            }
            if (!args || args.gateway === undefined) {
                throw new Error("Missing required property 'gateway'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.roles === undefined) {
                throw new Error("Missing required property 'roles'");
            }
            if (!args || args.storageAccounts === undefined) {
                throw new Error("Missing required property 'storageAccounts'");
            }
            if (!args || args.tier === undefined) {
                throw new Error("Missing required property 'tier'");
            }
            inputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            inputs["componentVersion"] = args ? args.componentVersion : undefined;
            inputs["gateway"] = args ? args.gateway : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["httpsEndpoint"] = undefined /*out*/;
            inputs["sshEndpoint"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(InteractiveQueryCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InteractiveQueryCluster resources.
 */
export interface InteractiveQueryClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion?: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    readonly componentVersion?: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway?: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    readonly httpsEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles?: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    readonly sshEndpoint?: pulumi.Input<string>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InteractiveQueryCluster resource.
 */
export interface InteractiveQueryClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    readonly componentVersion: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    readonly storageAccounts: pulumi.Input<pulumi.Input<inputApi.hdinsight.InteractiveQueryClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: pulumi.Input<string>;
}
