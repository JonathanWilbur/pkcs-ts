/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OPEN */
/**
 * @summary OPEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPEN ::= CLASS {&Type
 * }WITH SYNTAX {TYPE &Type
 * }
 * ```
 *
 * @interface
 */
export interface OPEN<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPEN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPEN<Type>]: $.ASN1Decoder<OPEN<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPEN<Type>]: $.ASN1Encoder<OPEN<Type>[_K]>;
        }
    >;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
}
/* END_OF_SYMBOL_DEFINITION OPEN */

/* eslint-enable */
