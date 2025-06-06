import { Result, Button } from "antd";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center items-center w-[1290px] m-auto mt-[15px]">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Button
                            onClick={() => navigate("/")}
                            type="default"
                            className="h-[40px] px-[10px]"
                        >
                            Back Home
                        </Button>
                    }
                />
            </div>
        </>
    );
};

export default NotFound;
