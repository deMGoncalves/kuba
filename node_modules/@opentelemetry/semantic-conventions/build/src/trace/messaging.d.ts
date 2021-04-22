/**
 * messaging attribute names defined by the Opetelemetry Semantic Conventions specification
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/messaging.md
 */
export declare const MessagingAttribute: {
    /**
     * A string identifying the messaging system.
     * example: kafka, rabbitmq, sqs, sns
     *
     * @remarks
     * Required.
     */
    MESSAGING_SYSTEM: string;
    /**
     * The message destination name. This might be equal to the span name but is required nevertheless.
     * example: MyQueue, MyTopic
     *
     * @remarks
     * Required.
     */
    MESSAGING_DESTINATION: string;
    /**
     * The kind of message destination
     * allowed values: queue, topic,
     *
     * @remarks
     * Required only if the message destination is either a queue or topic.
     */
    MESSAGING_DESTINATION_KIND: string;
    /**
     * A boolean that is true if the message destination is temporary
     *
     * @remarks
     * Conditional If missing, it is assumed to be false.
     */
    MESSAGING_TEMP_DESTINATION: string;
    /**
     * The kind of message destination
     * allowed values: queue, topic,
     *
     * @remarks
     * Required only if the message destination is either a queue or topic.
     */
    MESSAGING_PROTOCOL: string;
    /**
     * The version of the transport protocol.
     *
     * @remarks
     * Optional.
     */
    MESSAGING_PROTOCOL_VERSION: string;
    /**
     * Connection string.
     * example: https://queue.amazonaws.com/80398EXAMPLE/MyQueue
     *
     * @remarks
     * Optional.
     */
    MESSAGING_URL: string;
    /**
     * A value used by the messaging system as an identifier for the message, represented as a string.
     *
     * @remarks
     * Optional.
     */
    MESSAGING_MESSAGE_ID: string;
    /**
     * The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".
     *
     * @remarks
     * Optional.
     */
    MESSAGING_CONVERSATION_ID: string;
    /**
     * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
     * Should be number.
     *
     * @remarks
     * Optional.
     */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: string;
    /**
     * The compressed size of the message payload in bytes.
     * Should be number.
     *
     * @remarks
     * Optional.
     */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: string;
    /**
     * For message consumers only.
     * allowed values: receive, process,
     *
     * @remarks
     * Optional.
     */
    MESSAGING_OPERATION: string;
    MESSAGING_RABBITMQ_ROUTING_KEY: string;
    MESSAGING_KAFKA_MESSAGE_KEY: string;
    MESSAGING_KAFKA_CONSUMER_GROUP: string;
    MESSAGING_KAFKA_CLIENT_ID: string;
    MESSAGING_KAFKA_PARTITION: string;
    MESSAGING_KAFKA_TOMBSTONE: string;
};
export declare const MessagingOperationName: {
    /**
     *  A message is sent to a destination by a message producer/client.
     */
    SEND: string;
    /**
     *  A message is received from a destination by a message consumer/server.
     */
    RECEIVE: string;
    /**
     *  A message that was previously received from a destination is processed by a message consumer/server.
     */
    PROCESS: string;
};
//# sourceMappingURL=messaging.d.ts.map