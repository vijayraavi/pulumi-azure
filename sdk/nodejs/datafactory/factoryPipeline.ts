// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a Pipeline inside a Azure Data Factory.
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
 * const exampleFactoryPipeline = new azure.datafactory.FactoryPipeline("example", {
 *     dataFactoryName: exampleFactory.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 */
export class FactoryPipeline extends pulumi.CustomResource {
    /**
     * Get an existing FactoryPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FactoryPipelineState, opts?: pulumi.CustomResourceOptions): FactoryPipeline {
        return new FactoryPipeline(name, <any>state, { ...opts, id: id });
    }

    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    public readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
     */
    public readonly dataFactoryName: pulumi.Output<string>;
    /**
     * The description for the Data Factory Pipeline.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    public readonly parameters: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    public readonly variables: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a FactoryPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryPipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FactoryPipelineArgs | FactoryPipelineState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FactoryPipelineState = argsOrState as FactoryPipelineState | undefined;
            inputs["annotations"] = state ? state.annotations : undefined;
            inputs["dataFactoryName"] = state ? state.dataFactoryName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as FactoryPipelineArgs | undefined;
            if (!args || args.dataFactoryName === undefined) {
                throw new Error("Missing required property 'dataFactoryName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["annotations"] = args ? args.annotations : undefined;
            inputs["dataFactoryName"] = args ? args.dataFactoryName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["variables"] = args ? args.variables : undefined;
        }
        super("azure:datafactory/factoryPipeline:FactoryPipeline", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FactoryPipeline resources.
 */
export interface FactoryPipelineState {
    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
     */
    readonly dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Pipeline.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    readonly variables?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a FactoryPipeline resource.
 */
export interface FactoryPipelineArgs {
    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
     */
    readonly dataFactoryName: pulumi.Input<string>;
    /**
     * The description for the Data Factory Pipeline.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    readonly parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    readonly variables?: pulumi.Input<{[key: string]: any}>;
}
