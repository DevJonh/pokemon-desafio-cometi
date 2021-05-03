import { useAuth } from "../../store/useAuth";
import * as Styles from "./styles";

const Loading = () => {
  const { isLoading } = useAuth();
  return (
    <Styles.Container load={isLoading}>
      <Styles.Content>
        <img
          src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"
          alt=""
        />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Loading;
