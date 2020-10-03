import { Publisher, Subjects, OrderCancelledEvent } from '@alontickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}