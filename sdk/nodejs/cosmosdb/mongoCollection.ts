// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Mongo Collection within a Cosmos DB Account.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleAccount = azure.cosmosdb.getAccount({
 *     name: "tfex-cosmosdb-account",
 *     resourceGroupName: "tfex-cosmosdb-account-rg",
 * });
 * const exampleMongoDatabase = new azure.cosmosdb.MongoDatabase("example", {
 *     accountName: exampleAccount.name,
 *     name: "tfex-cosmos-mongo-db",
 *     resourceGroupName: exampleAccount.resourceGroupName,
 * });
 * const exampleMongoCollection = new azure.cosmosdb.MongoCollection("example", {
 *     accountName: exampleAccount.name,
 *     databaseName: exampleMongoDatabase.name,
 *     defaultTtlSeconds: 777,
 *     indexes: [
 *         {
 *             key: "aKey",
 *             unique: false,
 *         },
 *         {
 *             key: "uniqueKey",
 *             unique: true,
 *         },
 *     ],
 *     name: "tfex-cosmos-mongo-db",
 *     resourceGroupName: exampleAccount.resourceGroupName,
 *     shardKey: "uniqueKey",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_mongo_collection.html.markdown.
 */
export class MongoCollection extends pulumi.CustomResource {
    /**
     * Get an existing MongoCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MongoCollectionState, opts?: pulumi.CustomResourceOptions): MongoCollection {
        return new MongoCollection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:cosmosdb/mongoCollection:MongoCollection';

    /**
     * Returns true if the given object is an instance of MongoCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoCollection.__pulumiType;
    }

    public readonly accountName!: pulumi.Output<string>;
    /**
     * The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
     */
    public readonly defaultTtlSeconds!: pulumi.Output<number | undefined>;
    /**
     * One or more `indexes` blocks as defined below.
     */
    public readonly indexes!: pulumi.Output<outputs.cosmosdb.MongoCollectionIndex[] | undefined>;
    /**
     * Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The name of the key to partition on for sharding. There must not be any other unique index keys. 
     */
    public readonly shardKey!: pulumi.Output<string | undefined>;

    /**
     * Create a MongoCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoCollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MongoCollectionArgs | MongoCollectionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as MongoCollectionState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["defaultTtlSeconds"] = state ? state.defaultTtlSeconds : undefined;
            inputs["indexes"] = state ? state.indexes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["shardKey"] = state ? state.shardKey : undefined;
        } else {
            const args = argsOrState as MongoCollectionArgs | undefined;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.databaseName === undefined) {
                throw new Error("Missing required property 'databaseName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["defaultTtlSeconds"] = args ? args.defaultTtlSeconds : undefined;
            inputs["indexes"] = args ? args.indexes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["shardKey"] = args ? args.shardKey : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(MongoCollection.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MongoCollection resources.
 */
export interface MongoCollectionState {
    readonly accountName?: pulumi.Input<string>;
    /**
     * The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
     */
    readonly defaultTtlSeconds?: pulumi.Input<number>;
    /**
     * One or more `indexes` blocks as defined below.
     */
    readonly indexes?: pulumi.Input<pulumi.Input<inputs.cosmosdb.MongoCollectionIndex>[]>;
    /**
     * Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the key to partition on for sharding. There must not be any other unique index keys. 
     */
    readonly shardKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MongoCollection resource.
 */
export interface MongoCollectionArgs {
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
     */
    readonly defaultTtlSeconds?: pulumi.Input<number>;
    /**
     * One or more `indexes` blocks as defined below.
     */
    readonly indexes?: pulumi.Input<pulumi.Input<inputs.cosmosdb.MongoCollectionIndex>[]>;
    /**
     * Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the key to partition on for sharding. There must not be any other unique index keys. 
     */
    readonly shardKey?: pulumi.Input<string>;
}
