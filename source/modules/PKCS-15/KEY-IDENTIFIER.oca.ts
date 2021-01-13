/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KEY_IDENTIFIER */
/**
 * @summary KEY_IDENTIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEY-IDENTIFIER ::= CLASS {
 *     &id  INTEGER UNIQUE,
 *     &Value
 * } WITH SYNTAX {
 *     SYNTAX &Value
 *     IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface KEY_IDENTIFIER<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "KEY-IDENTIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof KEY_IDENTIFIER<Value>]: $.ASN1Decoder<
                KEY_IDENTIFIER<Value>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof KEY_IDENTIFIER<Value>]: $.ASN1Encoder<
                KEY_IDENTIFIER<Value>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
    /**
     * @summary &Value
     */
    readonly "&Value": Value;
}
/* END_OF_SYMBOL_DEFINITION KEY_IDENTIFIER */

/* eslint-enable */
