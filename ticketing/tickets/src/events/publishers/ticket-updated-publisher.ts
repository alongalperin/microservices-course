import { Publisher, Subjects, TicketUpdatedEvent } from '@alontickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {

    readonly subject = Subjects.TicketUpdated;

}