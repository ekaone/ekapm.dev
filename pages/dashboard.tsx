import { useState, useEffect } from "react";
import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { supabase } from "../libs/initSupabase";
import { SectionHeadline } from "../components/section-headline";
import { Viewer } from "../components";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [listeners, setListeners] = useState({});

  const fetchDevices = async () => {
    //@ts-ignore
    let { data: raspi, error } = await supabase
      .from("raspi")
      .select("*")
      //@ts-ignore
      .order("id", true);
    if (error) console.error("error", error);
    //@ts-ignore
    else setDevices(raspi);
  };

  useEffect(() => {
    if (devices.length !== 0) {
      //@ts-ignore
      const objIndex = devices.findIndex((obj) => obj.id === listeners.id);
      //@ts-ignore
      devices[objIndex].value = listeners.value;
    }

    () => {
      supabase.removeSubscription(raspiListener);
    };
  }, [listeners]);

  useEffect(() => {
    fetchDevices();
  }, []);

  const raspiListener = supabase
    .from("raspi:id=eq.3")
    .on("UPDATE", (payload) => {
      setListeners(payload.new);
    })
    .subscribe();

  return (
    <>
      <SectionHeadline>Dashboard</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are Dashboard Garden IoT.
      </Text>

      <Stack spacing={5}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Monitoring!</AlertTitle>
            <AlertDescription display="block">
              Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto rem minus eaque dicta incidunt aliquam soluta neque
              quod recusandae? Maxime aliquam error quo sapiente labore earum,
              excepturi voluptas expedita cum{" "}
              <span role="img" aria-label="pc">
                💻
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {devices.map((device) => (
            //@ts-ignore
            <Box key={device.id}>
              <Viewer
                name={
                  //@ts-ignore
                  device.name
                }
                data={
                  //@ts-ignore
                  device.value
                }
              />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Dashboard;
