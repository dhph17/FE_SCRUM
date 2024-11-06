import MonthlyAccountChart from "../../layouts/chart/chartAccountMonth";
import MonthlyPostChart from "../../layouts/chart/chartPostMonth";
import TutorRatingsPieChart from "../../layouts/chart/pieChartRating";
import StatsSection from "../../layouts/chart/StatsSection";
import Admin from "../../layouts/PageAuthorization/admin/admin"
import Page from "../../layouts/panel/Panel";

const StatisticalApp = () => {
    const monthlyPostData = [30, 45, 23, 50, 60, 10, 70, 40, 35, 90, 55, 65];
    const parentAccounts = [10, 20, 15, 30, 25, 20, 35, 40, 45, 50, 60, 70];
    const tutorAccounts = [5, 15, 10, 25, 30, 20, 40, 35, 45, 60, 55, 65];
    const ratings = [4.5, 3.2, 2.9, 1.1, 4.7, 3.5, 1.8, 0.9, 2.3, 3.9];
    const ratingGroups = { '0-1': 0, '1-2': 0, '2-3': 0, '3-4': 0, '4-5': 0 };

    ratings.forEach((rating) => {
        if (rating >= 0 && rating < 1) ratingGroups['0-1']++;
        else if (rating >= 1 && rating < 2) ratingGroups['1-2']++;
        else if (rating >= 2 && rating < 3) ratingGroups['2-3']++;
        else if (rating >= 3 && rating < 4) ratingGroups['3-4']++;
        else if (rating >= 4 && rating <= 5) ratingGroups['4-5']++;
    });

    return (
        <Admin>
            <Page activeItem={7}>
                <div className="bg-white">
                    <div>
                        <StatsSection />
                    </div>
                    <div>
                        <MonthlyPostChart data={monthlyPostData} />
                        <MonthlyAccountChart parentAccounts={parentAccounts} tutorAccounts={tutorAccounts} />
                        {/* <TutorRatingsPieChart data={ratingGroups} /> */}
                    </div>
                </div>

            </Page>
        </Admin>
    )
}

export default StatisticalApp