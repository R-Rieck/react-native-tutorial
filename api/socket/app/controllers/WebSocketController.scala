package controllers

import actors.{ChatManagerActor, ChatMessagingActor}
import akka.actor.{ActorRef, ActorSystem, Props}
import models.ChatMessage
import play.api.libs.json.{JsError, JsSuccess, JsValue, Json}
import play.api.libs.streams.ActorFlow
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents, Request, Result, WebSocket}

import javax.inject.Inject

class WebSocketController @Inject()(controllerComponents: ControllerComponents)(implicit actSystem: ActorSystem)
  extends AbstractController(controllerComponents) {
	val manager: ActorRef = actSystem.actorOf(Props[ChatManagerActor], "manager")

	def ws: WebSocket = WebSocket.accept[String, String] { request =>
		ActorFlow.actorRef { out =>
			ChatMessagingActor.props(out, manager)
		}
	}

	def modelTest: Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
		val body = request.body.asJson
		body match {
			case Some(bodyContent) => val
			json = Json.fromJson[ChatMessage](bodyContent)
				json match {
					case JsSuccess(value, path) => Ok(Json.toJson[ChatMessage](value))
					case JsError(errors) => NotAcceptable
				}
			case None => NotAcceptable
		}

	}
}
