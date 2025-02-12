import { DocSectionText } from '../../common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
            </DocSectionText>
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
                            <td>p-sidebar</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-left</td>
                            <td>Container element of left sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-right</td>
                            <td>Container element of right sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-top</td>
                            <td>Container element of top sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-bottom</td>
                            <td>Container element of bottom sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-full</td>
                            <td>Container element of a full screen sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-active</td>
                            <td>Container element when sidebar is visible.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-close</td>
                            <td>Close anchor element.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-sm</td>
                            <td>Small sized sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-md</td>
                            <td>Medium sized sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-lg</td>
                            <td>Large sized sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-view</td>
                            <td>The page view is displayed according to the sidebar position.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-content</td>
                            <td>Content of sidebar.</td>
                        </tr>
                        <tr>
                            <td>p-sidebar-mask</td>
                            <td>Modal layer of the sidebar.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
