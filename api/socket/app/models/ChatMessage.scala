package models

import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.{JsPath, JsValue, Json, Reads, Writes}

case class ChatMessage(id: String, image: String, message: String, timestamp: Int, by: String)


object ChatMessage {
	implicit val ChatMessageRead: Reads[ChatMessage] = (
	  (JsPath \ "id").read[String] and
		(JsPath \ "image").read[String] and
		(JsPath \ "message").read[String] and
		(JsPath \ "timestamp").read[Int] and
		(JsPath \ "by").read[String]
	  ) (ChatMessage.apply _)
	implicit val ChatMessageWrite: Writes[ChatMessage] = (
	  (JsPath \ "id").write[String] and
		(JsPath \ "image").write[String] and
		(JsPath \ "message").write[String] and
		(JsPath \ "timestamp").write[Int] and
		(JsPath \ "by").write[String]
	  ) (unlift(ChatMessage.unapply))

}