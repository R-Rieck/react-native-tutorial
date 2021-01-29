package actors

import actors.ChatMessagingActor.SendMessage
import akka.actor._
import akka.actor.{Actor, ActorRef, PoisonPill, Props}

class ChatMessagingActor(clientActorRef: ActorRef, manager: ActorRef) extends Actor {
	manager ! ChatManagerActor.NewParticipant(self)

	override def receive: Receive = {
		case msg: String => manager ! ChatManagerActor.Message(msg)
		case SendMessage(message) => clientActorRef ! message

		/*case None =>
			clientActorRef ! s"Closing the connection as requested"
			self ! PoisonPill*/
	}

	override def postStop(): Unit = println("Closing Messaging Socket")
}

object ChatMessagingActor {
	def props(clientActorRef: ActorRef, manager: ActorRef): Props = Props(new ChatMessagingActor(clientActorRef, manager))

	case class SendMessage(message: String)

}