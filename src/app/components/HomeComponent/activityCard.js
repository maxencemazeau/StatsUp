import React, { useState, useEffect } from "react"
import { Link } from "expo-router"
import { Typography, Button, Card, Container, CardContent, Divider } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { getActivity } from "../../axiosPath/axiosPath";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { noMoreActivityData } from "../../reduxState/offset/hasMoreDataActivity";
import { isActivityLoading } from "../../reduxState/offset/activityLoadingSlice";
import { useQuery, useQueryClient } from "react-query";
import HomeCardSkeleton from "../skeleton/homeCardSkeleton";
import PopUpAxiosError from "../error/popUpAxiosError";
import { loadingError } from "../../reduxState/error/loadingErrorSlice";
import { useLoadMoreActivity } from "../../hooks/apiCall/loadMoreActivity";

export default function ActivityCard({ activityOffset }) {

    const queryClient= useQueryClient()
    const [timer, setTimer] = useState(false)
    const [timerText, setTimerText] = useState("START")
    const isMoreDataLoading = useSelector((state) => state.isActivityLoading.value)
    const errorState = useSelector((state) => state.loadingError.value);
    const [oldOffset, setOldOffset] = useState()
    const hasNoMoreData = useSelector((state) => state.hasMoreActivityData.value)
    const dispatch = useDispatch()

    useLoadMoreActivity(activityOffset)

    const { data : activityList, isLoading } = useQuery({
        queryFn: async() => LoadUserActivies(),
        queryKey: ["activityList"],
        staleTime: Infinity,
    })

    const LoadUserActivies = async () => {
        const response = await axios.get(getActivity, { params: { id: 1, offset: 0 } });
        setOldOffset(activityOffset)
        return response.data.activity
    };


    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    const changeTimer = () => {
        if (timer == false) {
            setTimer(true);
            setTimerText("STOP")
        } else {
            setTimer(false);
            setTimerText("START")
        }

    }

    return (
        <Container maxWidth="md" sx={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2 }}>
            {activityList?.map(activities => (
                <Card key={activities.ActivityID} variant="outlined" sx={{ marginBottom: 3, borderRadius: 4 }}>
                    <CardContent>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                            <Grid item xs={9} sm={10}>
                                <Typography variant="h6" sx={{ fontFamily: "Poppins_700Bold" }} gutterBottom>{activities.ActivityName}</Typography>
                                <Typography variant="body1" sx={{ marginTop: 1, fontFamily: 'Poppins_400Regular' }} gutterBottom>{activities.GoalName} : 0/{activities.Frequence}</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Link href={{ pathname: "/pages/activity/activityDetail", params: { lastPage: "/pages/home/reduxHomeProvider" } }}>
                                    <Button sx={{ bgcolor: "#DD7A34", borderRadius: 25, height: 50 }}>
                                        <ArrowForwardIosIcon sx={{ color: "white" }} />
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                        {activities.Timer &&
                            <>
                                <Divider></Divider>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                                    <Grid item xs={9}>
                                        <Typography variant="body1" color={timer == true ? 'red' : 'green'} sx={{ fontFamily: "Poppins_700Bold" }} onClick={() => changeTimer()}>{timerText}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body1" sx={{ fontFamily: "Poppins_400Regular" }}>10:00:00</Typography>
                                    </Grid>
                                </Grid>
                            </>}
                    </CardContent>
                </Card>
            ))}
            {isMoreDataLoading && <HomeCardSkeleton /> }
            {errorState && <PopUpAxiosError/>}
        </Container>
    )

}