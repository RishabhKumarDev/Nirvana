import '../styles/FirstPage.css';
import EmotionsTracker from '../components/EmotionsTracker';
const FirstPage = () => {

    return ( 
    <div className="first-page-wrap">
        <div className="first-page-journal-cover-wrap">
            <div className="journal-cover-spine"></div>
            <div className="journal-cover">
                <div className="owner-name-dispay">
                    <h2>Blue's Journal</h2>
                </div>
                <div className="input">
                    <EmotionsTracker />
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default FirstPage;
// first page doesn't include navbar because navbar is same at every page.