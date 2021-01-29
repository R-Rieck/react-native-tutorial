package actors

import actors.ChatManagerActor.{Message, NewParticipant}
import akka.actor.{Actor, ActorRef}

class ChatManagerActor() extends Actor {
	private var chatters = List.empty[ActorRef]

	override def receive: Receive = {
		case NewParticipant(participant) => chatters ::= participant
		case Message(message) => for (c <- chatters) c ! ChatMessagingActor.SendMessage(message)
		case default => println("unhandeld Participant: " + default)
	}
}

object ChatManagerActor {

	case class NewParticipant(participant: ActorRef)

	case class Message(message: String)

}
