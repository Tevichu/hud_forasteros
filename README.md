# Tevi Hud 

Preview: https://streamable.com/f5a94n

*go into esx_status/client/main.lua*

RegisterNetEvent('esx_status:load')
AddEventHandler('esx_status:load', function(status)
  for i=1, #Status, 1 do
  	for j=1, #status, 1 do
  		if Status[i].name == status[j].name then
  			Status[i].set(status[j].val)
  		end
  	end
  end

  Citizen.CreateThread(function()
  	while true do
  		for i=1, #Status, 1 do
  			Status[i].onTick()
  		end

  		SendNUIMessage({
  			update = true,
  			status = GetStatusData()
  		})

  		TriggerEvent('esx_status:onTick', GetStatusData(true))
  		Citizen.Wait(Config.TickTime)
  	end
  end)
end)

*And Replace it with this*

RegisterNetEvent('esx_status:load')
AddEventHandler('esx_status:load', function(status)
  for i=1, #Status, 1 do
  	for j=1, #status, 1 do
  		if Status[i].name == status[j].name then
  			Status[i].set(status[j].val)
  		end
  	end
  end

  Citizen.CreateThread(function()
  	while true do
  		for i=1, #Status, 1 do
  			Status[i].onTick()
  		end

  		SendNUIMessage({
  			update = true,
  			status = GetStatusData()
  		})

  		TriggerEvent('tevi_hud:update', GetStatusData(true))
  		Citizen.Wait(Config.TickTime)
  	end
  end)
end)
