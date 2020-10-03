import { Subjects, Publisher, ExpirationCompleteEvent } from '@alontickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}