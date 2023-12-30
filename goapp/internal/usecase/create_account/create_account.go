package create_account

import (
	"github.com.br/rodrigmelo/fc-ms-wallet/internal/entity"
	"github.com.br/rodrigmelo/fc-ms-wallet/internal/gateway"
)

type CreateAccountInputDtO struct {
	ClientID string `json:"client_id"`
}

type CreateAccountOutputDtO struct {
	ID string
}

type CreateAccountUseCase struct {
	AccountGateway gateway.AccountGateway
	ClientGateway  gateway.ClientGateway
}

func NewCreateAccountUseCase(a gateway.AccountGateway, c gateway.ClientGateway) *CreateAccountUseCase {
	return &CreateAccountUseCase{AccountGateway: a, ClientGateway: c}
}

func (uc *CreateAccountUseCase) Execute(input CreateAccountInputDtO) (*CreateAccountOutputDtO, error) {
	client, err := uc.ClientGateway.Get(input.ClientID)
	if err != nil {
		return nil, err
	}
	account := entity.NewAccount(client)
	err = uc.AccountGateway.Save(account)
	if err != nil {
		return nil, err
	}
	return &CreateAccountOutputDtO{
		ID: account.ID,
	}, nil
}
