import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import styles from "../styles/imagePicker";

type ImageChooserPropsType = {
  changeImage: (image: string) => void;
};

const ImageChooser = (props: ImageChooserPropsType) => {
  const { changeImage } = props;
  const [image, setImage] = useState<string>("");
  const [isPermitted, setIsPermitted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        setIsPermitted(false);
        console.log(
          "Sorry, but we need Media Library access to let you choose an Image"
        );
      } else {
        setIsPermitted(true);
      }
    }
  };

  useEffect(() => console.log("image choosen:", image), []);

  const pickImage = async () => {
    if (isPermitted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        var resizedImage = await ImageManipulator.manipulateAsync(
          result.uri,
          [{ resize: { width: 500, height: 500 } }],
          { base64: true }
        );
        console.log(resizedImage);

        var imageAsBase64 = resizedImage.uri ?? "";
        setImage(imageAsBase64);
        changeImage(image);
      }
    } else {
      await requestPermission();
    }
  };

  return (
    <View>
      {/* <Button title="Choose Image" onPress={() => pickImage()} /> */}
      {image ? (
        <TouchableOpacity onPress={() => pickImage()}>
          <Image
            resizeMode="cover"
            style={styles.avatar}
            source={{ uri: image }}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.avatarPlaceholder} onTouchStart={() => pickImage()}>
          <Text style={styles.missingImageText}>Select Image</Text>
        </View>
      )}
    </View>
  );
};

export default ImageChooser;
