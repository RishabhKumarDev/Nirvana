import '../styles/FirstPage.css';
import EmotionsTracker from '../components/EmotionsTracker';
import { useNotes } from "../components/NotesContext";

const FirstPage = () => {
 const {selectedCoverEmoji,setSelectedCoverEmoji} = useNotes();
 
    return ( 
    <div className="first-page-wrap">
        <div className="first-page-journal-cover-wrap">
            <div className="journal-cover-spine"></div>
            <div className="journal-cover">
                <div className="owner-name-dispay">
                    <h2>Blue's Journal</h2>
                </div>
                <div className="input">
                    <EmotionsTracker selectedCoverEmoji={selectedCoverEmoji} setSelectedCoverEmoji={setSelectedCoverEmoji} />
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default FirstPage;
// first page doesn't include navbar because navbar is same at every page.