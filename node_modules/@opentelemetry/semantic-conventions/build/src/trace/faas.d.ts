/**
 * FaaS (Function as a Service) attribute names defined by the Opetelemetry Semantic Conventions specification
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/faas.md
 */
export declare const FaasAttribute: {
    /**
     * The name of the function being executed.
     *
     * @remarks
     * Required.
     */
    FAAS_NAME: string;
    /**
     * The unique ID of the function being executed.
     * For example, in AWS Lambda this field corresponds to the ARN value, in GCP to the URI of the resource, and in Azure to the FunctionDirectory field.
     *
     * @remarks
     * Required.
     */
    FAAS_ID: string;
    /**
     * The version string of the function being executed.
     *
     * @remarks
     * Optional.
     */
    FAAS_VERSION: string;
    /**
     * The execution environment ID as a string.
     *
     * @remarks
     * Optional.
     */
    FAAS_INSTANCE: string;
    /**
     * Type of the trigger on which the function is executed.
     * Possible values: datasource, http, pubsub, timer, other
     *
     * @remarks
     * Required if applicable.
     */
    FAAS_TRIGGER: string;
    /**
     * The execution ID of the current function execution.
     *
     * @remarks
     * Optional.
     */
    FAAS_EXECUTION: string;
    /**
     * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
     *
     * @remarks
     * Optional.
     */
    FAAS_COLD_START: string;
    /**
     * The name of the invoked function.
     * SHOULD be equal to the faas.name resource attribute of the invoked function.
     *
     * @remarks
     * Optional.
     */
    FAAS_INVOKED_NAME: string;
    /**
     * The cloud provider of the invoked function.
     * SHOULD be equal to the cloud.provider resource attribute of the invoked function.
     *
     * @remarks
     * Optional.
     */
    FAAS_INVOKED_PROVIDER: string;
    /**
     * The cloud region of the invoked function.
     *  SHOULD be equal to the cloud.region resource attribute of the invoked function.
     *
     * @remarks
     * Optional.
     */
    FAAS_INVOKED_REGION: string;
    /**
     * The name of the source on which the triggering operation was performed.
     * For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
     *
     * @remarks
     * Required if applicable.
     */
    FAAS_DOC_COLLECTION: string;
    /**
     * Describes the type of the operation that was performed on the data.
     * MUST be one of the following or, if none of the listed values apply, a custom value: insert, edit, delete
     *
     * @remarks
     * Required if applicable.
     */
    FAAS_DOC_OPERATION: string;
    /**
     * A string containing the time when the data was accessed in the ISO 8601 format expressed in UTC.
     *
     * @remarks
     * Required if applicable.
     */
    FAAS_DOC_TIME: string;
    /**
     * The document name/table subjected to the operation.
     * For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
     *
     * @remarks
     * Optional.
     */
    FAAS_DOC_NAME: string;
    /**
     * A string containing the function invocation time in the ISO 8601 format expressed in UTC.
     * Example: "2020-01-23T13:47:06Z"
     *
     * @remarks
     * Required if applicable.
     */
    FAAS_TIME: string;
    /**
     * A string containing the schedule period as Cron Expression.
     * Example: "0/5 * * * ? *"
     *
     * @remarks
     * Optional.
     */
    FAAS_CRON: string;
};
//# sourceMappingURL=faas.d.ts.map