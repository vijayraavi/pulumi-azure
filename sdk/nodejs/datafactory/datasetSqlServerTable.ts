// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manage a SQL Server Table Dataset inside a Azure Data Factory.
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
 * const exampleDatasetSqlServerTable = new azure.datafactory.DatasetSqlServerTable("example", {
 *     dataFactoryName: exampleFactory.name,
 *     linkedServiceName: azurerm_data_factory_linked_service_sql_server_test.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleLinkedServiceSqlServer = new azure.datafactory.LinkedServiceSqlServer("example", {
 *     connectionString: "Integrated Security=False;Data Source=test;Initial Catalog=test;User ID=test;Password=test",
 *     dataFactoryName: exampleFactory.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_dataset_sql_server_table.html.markdown.
 */
export class DatasetSqlServerTable extends pulumi.CustomResource {
    /**
     * Get an existing DatasetSqlServerTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetSqlServerTableState, opts?: pulumi.CustomResourceOptions): DatasetSqlServerTable {
        return new DatasetSqlServerTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datafactory/datasetSqlServerTable:DatasetSqlServerTable';

    /**
     * Returns true if the given object is an instance of DatasetSqlServerTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasetSqlServerTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasetSqlServerTable.__pulumiType;
    }

    /**
     * A map of additional properties to associate with the Data Factory Dataset SQL Server Table.
     */
    public readonly additionalProperties!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset SQL Server Table.
     */
    public readonly annotations!: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    public readonly dataFactoryName!: pulumi.Output<string>;
    /**
     * The description for the Data Factory Dataset SQL Server Table.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    public readonly folder!: pulumi.Output<string | undefined>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    public readonly linkedServiceName!: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Dataset SQL Server Table. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset SQL Server Table.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset SQL Server Table. Changing this forces a new resource
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    public readonly schemaColumns!: pulumi.Output<outputApi.datafactory.DatasetSqlServerTableSchemaColumn[] | undefined>;
    /**
     * The table name of the Data Factory Dataset SQL Server Table.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;

    /**
     * Create a DatasetSqlServerTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetSqlServerTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasetSqlServerTableArgs | DatasetSqlServerTableState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DatasetSqlServerTableState | undefined;
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
            const args = argsOrState as DatasetSqlServerTableArgs | undefined;
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
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DatasetSqlServerTable.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DatasetSqlServerTable resources.
 */
export interface DatasetSqlServerTableState {
    /**
     * A map of additional properties to associate with the Data Factory Dataset SQL Server Table.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset SQL Server Table.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    readonly dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Dataset SQL Server Table.
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
     * Specifies the name of the Data Factory Dataset SQL Server Table. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset SQL Server Table.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset SQL Server Table. Changing this forces a new resource
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns?: pulumi.Input<pulumi.Input<inputApi.datafactory.DatasetSqlServerTableSchemaColumn>[]>;
    /**
     * The table name of the Data Factory Dataset SQL Server Table.
     */
    readonly tableName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatasetSqlServerTable resource.
 */
export interface DatasetSqlServerTableArgs {
    /**
     * A map of additional properties to associate with the Data Factory Dataset SQL Server Table.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset SQL Server Table.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Dataset with. Changing this forces a new resource.
     */
    readonly dataFactoryName: pulumi.Input<string>;
    /**
     * The description for the Data Factory Dataset SQL Server Table.
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
     * Specifies the name of the Data Factory Dataset SQL Server Table. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset SQL Server Table.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset SQL Server Table. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns?: pulumi.Input<pulumi.Input<inputApi.datafactory.DatasetSqlServerTableSchemaColumn>[]>;
    /**
     * The table name of the Data Factory Dataset SQL Server Table.
     */
    readonly tableName?: pulumi.Input<string>;
}
