import { Subjects, Publisher, PaymentCreatedEvent } from '@alontickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
