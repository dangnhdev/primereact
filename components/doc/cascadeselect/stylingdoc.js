import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function StylingDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-cascadeselect</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-label</td>
                                <td>Element to display label of selected option.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-trigger</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-panel</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-items-wrapper</td>
                                <td>Wrapper element of items list.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-items</td>
                                <td>List element of items.</td>
                            </tr>
                            <tr>
                                <td>p-cascadeselect-item</td>
                                <td>An item in the list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}