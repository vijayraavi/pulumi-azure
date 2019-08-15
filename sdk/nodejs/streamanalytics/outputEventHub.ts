// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Stream Analytics Output to an EventHub.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = pulumi.output(azure.core.getResourceGroup({
 *     name: "example-resources",
 * }));
 * const exampleJob = azurerm_resource_group_example.name.apply(name => azure.streamanalytics.getJob({
 *     name: "example-job",
 *     resourceGroupName: name,
 * }));
 * const testEventHub = new azure.eventhub.EventHub("test", {
 *     messageRetention: 1,
 *     name: "example-eventhub",
 *     namespaceName: azurerm_eventhub_namespace_example.name,
 *     partitionCount: 2,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const testEventHubNamespace = new azure.eventhub.EventHubNamespace("test", {
 *     capacity: 1,
 *     kafkaEnabled: false,
 *     location: exampleResourceGroup.location,
 *     name: "example-ehnamespace",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleOutputEventHub = new azure.streamanalytics.OutputEventHub("example", {
 *     eventhubName: azurerm_eventhub_example.name,
 *     name: "output-to-eventhub",
 *     resourceGroupName: exampleJob.resourceGroupName,
 *     serialization: {
 *         type: "Avro",
 *     },
 *     servicebusNamespace: azurerm_eventhub_namespace_example.name,
 *     sharedAccessPolicyKey: azurerm_eventhub_namespace_example.defaultPrimaryKey,
 *     sharedAccessPolicyName: "RootManageSharedAccessKey",
 *     streamAnalyticsJobName: exampleJob.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/stream_analytics_output_eventhub.html.markdown.
 */
export class OutputEventHub extends pulumi.CustomResource {
    /**
     * Get an existing OutputEventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputEventHubState, opts?: pulumi.CustomResourceOptions): OutputEventHub {
        return new OutputEventHub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:streamanalytics/outputEventHub:OutputEventHub';

    /**
     * Returns true if the given object is an instance of OutputEventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OutputEventHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OutputEventHub.__pulumiType;
    }

    /**
     * The name of the Event Hub.
     */
    public readonly eventhubName!: pulumi.Output<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `serialization` block as defined below.
     */
    public readonly serialization!: pulumi.Output<outputApi.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    public readonly servicebusNamespace!: pulumi.Output<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    public readonly sharedAccessPolicyKey!: pulumi.Output<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    public readonly sharedAccessPolicyName!: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    public readonly streamAnalyticsJobName!: pulumi.Output<string>;

    /**
     * Create a OutputEventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputEventHubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OutputEventHubArgs | OutputEventHubState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as OutputEventHubState | undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serialization"] = state ? state.serialization : undefined;
            inputs["servicebusNamespace"] = state ? state.servicebusNamespace : undefined;
            inputs["sharedAccessPolicyKey"] = state ? state.sharedAccessPolicyKey : undefined;
            inputs["sharedAccessPolicyName"] = state ? state.sharedAccessPolicyName : undefined;
            inputs["streamAnalyticsJobName"] = state ? state.streamAnalyticsJobName : undefined;
        } else {
            const args = argsOrState as OutputEventHubArgs | undefined;
            if (!args || args.eventhubName === undefined) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serialization === undefined) {
                throw new Error("Missing required property 'serialization'");
            }
            if (!args || args.servicebusNamespace === undefined) {
                throw new Error("Missing required property 'servicebusNamespace'");
            }
            if (!args || args.sharedAccessPolicyKey === undefined) {
                throw new Error("Missing required property 'sharedAccessPolicyKey'");
            }
            if (!args || args.sharedAccessPolicyName === undefined) {
                throw new Error("Missing required property 'sharedAccessPolicyName'");
            }
            if (!args || args.streamAnalyticsJobName === undefined) {
                throw new Error("Missing required property 'streamAnalyticsJobName'");
            }
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serialization"] = args ? args.serialization : undefined;
            inputs["servicebusNamespace"] = args ? args.servicebusNamespace : undefined;
            inputs["sharedAccessPolicyKey"] = args ? args.sharedAccessPolicyKey : undefined;
            inputs["sharedAccessPolicyName"] = args ? args.sharedAccessPolicyName : undefined;
            inputs["streamAnalyticsJobName"] = args ? args.streamAnalyticsJobName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(OutputEventHub.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering OutputEventHub resources.
 */
export interface OutputEventHubState {
    /**
     * The name of the Event Hub.
     */
    readonly eventhubName?: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization?: pulumi.Input<inputApi.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly servicebusNamespace?: pulumi.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    readonly sharedAccessPolicyKey?: pulumi.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly sharedAccessPolicyName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OutputEventHub resource.
 */
export interface OutputEventHubArgs {
    /**
     * The name of the Event Hub.
     */
    readonly eventhubName: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization: pulumi.Input<inputApi.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly servicebusNamespace: pulumi.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    readonly sharedAccessPolicyKey: pulumi.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly sharedAccessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Input<string>;
}
