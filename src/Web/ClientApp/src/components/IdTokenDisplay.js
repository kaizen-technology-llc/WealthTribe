import { MDBTable } from 'mdb-react-ui-kit';
import { createClaimsTable } from '../utils/claimUtils';

export const IdTokenDisplay = (props) => {
    const tokenClaims = createClaimsTable(props.idTokenClaims);

    const tableRow = Object.keys(tokenClaims).map((key, index) => {
        return (
            <tr key={key}>
                {tokenClaims[key].map((claimItem) => (
                    <td key={claimItem}>{claimItem}</td>
                ))}
            </tr>
        );
    });
    return (
        <>
            <p>
                See below the claims in your <strong> ID token </strong>. For more information, visit:{' '}
                <span>
                        <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token">
                            docs.microsoft.com
                        </a>
                    </span>
            </p>
            <div className="data-area-div">
                <div className="data-area-div">
                    <MDBTable responsive striped bordered hover>
                        <thead>
                        <tr>
                            <th>Claim</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>{tableRow}</tbody>
                    </MDBTable>
                </div>
            </div>
        </>
    );
};
