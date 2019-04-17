// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a PostgreSQL Dataset inside a Azure Data Factory.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "northeurope",
 *     name: "example",
 * });
 * const exampleFactory = new azure.datafactory.Factory("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleFactoryDatasetPostgresql = new azure.datafactory.FactoryDatasetPostgresql("example", {
 *     dataFactoryName: exampleFactory.name,
 *     linkedServiceName: azurerm_data_factory_linked_service_postgresql_test.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleFactoryLinkedServicePostgresql = new azure.datafactory.FactoryLinkedServicePostgresql("example", {
 *     connectionString: "Host=example;Port=5432;Database=example;UID=example;EncryptionMethod=0;Password=example",
 *     dataFactoryName: exampleFactory.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 */
export class FactoryDatasetPostgresql extends pulumi.CustomResource {
    /**
     * Get an existing FactoryDatasetPostgresql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FactoryDatasetPostgresqlState, opts?: pulumi.CustomResourceOptions): FactoryDatasetPostgresql {
        return new FactoryDatasetPostgresql(name, <any>state, { ...opts, id: id });
    }

    /**
     * A map of additional properties to associate with the Data Factory Dataset PostgreSQL.
     */
    public readonly additionalProperties: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset PostgreSQL.
     */
    public readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    public readonly dataFactoryName: pulumi.Output<string>;
    /**
     * The description for the Data Factory Dataset PostgreSQL.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    public readonly folder: pulumi.Output<string | undefined>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    public readonly linkedServiceName: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Dataset PostgreSQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset PostgreSQL.
     */
    public readonly parameters: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset PostgreSQL. Changing this forces a new resource
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `schema_column` block as defined below.
     */
    public readonly schemaColumns: pulumi.Output<{ description?: string, name: string, type?: string }[] | undefined>;
    /**
     * The table name of the Data Factory Dataset PostgreSQL.
     */
    public readonly tableName: pulumi.Output<string | undefined>;

    /**
     * Create a FactoryDatasetPostgresql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryDatasetPostgresqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FactoryDatasetPostgresqlArgs | FactoryDatasetPostgresqlState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FactoryDatasetPostgresqlState = argsOrState as FactoryDatasetPostgresqlState | undefined;
            inputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            inputs["annotations"] = state ? state.annotations : undefined;
            inputs["dataFactoryName"] = state ? state.dataFactoryName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["folder"] = state ? state.folder : undefined;
            inputs["linkedServiceName"] = state ? state.linkedServiceName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["schemaColumns"] = state ? state.schemaColumns : undefined;
            inputs["tableName"] = state ? state.tableName : undefined;
        } else {
            const args = argsOrState as FactoryDatasetPostgresqlArgs | undefined;
            if (!args || args.dataFactoryName === undefined) {
                throw new Error("Missing required property 'dataFactoryName'");
            }
            if (!args || args.linkedServiceName === undefined) {
                throw new Error("Missing required property 'linkedServiceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            inputs["annotations"] = args ? args.annotations : undefined;
            inputs["dataFactoryName"] = args ? args.dataFactoryName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["folder"] = args ? args.folder : undefined;
            inputs["linkedServiceName"] = args ? args.linkedServiceName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["schemaColumns"] = args ? args.schemaColumns : undefined;
            inputs["tableName"] = args ? args.tableName : undefined;
        }
        super("azure:datafactory/factoryDatasetPostgresql:FactoryDatasetPostgresql", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FactoryDatasetPostgresql resources.
 */
export interface FactoryDatasetPostgresqlState {
    /**
     * A map of additional properties to associate with the Data Factory Dataset PostgreSQL.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset PostgreSQL.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    readonly dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Dataset PostgreSQL.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    readonly folder?: pulumi.Input<string>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    readonly linkedServiceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset PostgreSQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset PostgreSQL.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset PostgreSQL. Changing this forces a new resource
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schema_column` block as defined below.
     */
    readonly schemaColumns?: pulumi.Input<pulumi.Input<{ description?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>;
    /**
     * The table name of the Data Factory Dataset PostgreSQL.
     */
    readonly tableName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FactoryDatasetPostgresql resource.
 */
export interface FactoryDatasetPostgresqlArgs {
    /**
     * A map of additional properties to associate with the Data Factory Dataset PostgreSQL.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset PostgreSQL.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    readonly dataFactoryName: pulumi.Input<string>;
    /**
     * The description for the Data Factory Dataset PostgreSQL.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    readonly folder?: pulumi.Input<string>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    readonly linkedServiceName: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset PostgreSQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset PostgreSQL.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset PostgreSQL. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `schema_column` block as defined below.
     */
    readonly schemaColumns?: pulumi.Input<pulumi.Input<{ description?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>;
    /**
     * The table name of the Data Factory Dataset PostgreSQL.
     */
    readonly tableName?: pulumi.Input<string>;
}
